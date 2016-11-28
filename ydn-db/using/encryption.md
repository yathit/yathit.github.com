---
layout: article
title:  "Encryption"
date:   2011-3-3
categories: ydn-db using
tag: article
---


## Tansparent Data Encryption ##

Browser database access is governed by the [same origin policy](http://www.w3.org/Security/wiki/Same_Origin_Policy), so that only websites sharing the same origin may access your database. This is good enough for most web application. However, if user OS is compromised or physically accessible by intruders, browser database has no security provision. Transparent data encryption is a well-known technology provided by YDN-DB that offers encryption of data at rest. This may provide the ability to comply with many laws, regulations, and guidelines established in various industries, when caching sensitive data on client side.

### Enabling store wise encryption ###

Application must provide cryptographically strong pseudo-random encryption key on opening the database for encryption. Use standard symmetric key generation library available on your server. Do not persist encryption key on client, but always transfer over SSL after user login. The key should be generated per user basic.

Encryption key(s) are provided in the `Encryption` field on database options. Encryption is enabled on a per-store basis but the same encryption key is used for the whole database. To enable encryption a store, set `encrypted` to `true` on its store schema.

An encrypted store must use an out-of-line key and must not use key generator, as illustrated in following schema. The following code snippets can be run on browser dev console:

    var schema = {
       version: 1,
       stores: [{
         name: 'encrypt-store',
         encrypted: true
       }]
     };
     var options = {
       Encryption: {
         expiration: 1000*15, //  optional data expiration in ms.
         secrets: [{
           name: 'aaaa',
           key: 'aYHF6vfuGHpfWS*eRLrPQxZjSó~É5c6HjCscqDqRtZasp¡JWSMGaW'
         }]
       }
     };

     var db = new ydn.db.Storage('encrypted-db-name', schema, options);

The record key is hashed with SHA256 using the given encryption key. The field, `secrets`, has array of encryption `key` and `name`. A short key name is kept along with the unencrypted record for later use. The record value is encrypted with the RC4 streaming cipher using a per-record 64-bit random salt and encryption key. AES and CBC cipher is also available. See [goog.crypt.Sha256](http://docs.closure-library.googlecode.com/git/class_goog_crypt_Sha256.html) and [goog.crypt.Arc4](http://docs.closure-library.googlecode.com/git/class_goog_crypt_Arc4.html) for implementation details.

Inside the database, the encrypted record value stores the following pieces of meta-data:

1. key name
2. salt
3. creation timestamp
4. expiration time (milliseconds)

Since the record key is hashed, both the encryption key and the record key are required to retrieve a record.

The expiration value is not encrypted and can be manipulated.  Also note that there is no compation process that removes expired records.  Experation times are checked upon retreival, at which point they will be removed.

## Using encryption ##

Once encryption is enabled, the record is encrypted on write and decrypted back on read. Encryption and decryption is performed only on CRUD database operations. Database query, such as `keys`, `values`, returns unencrypted values.

    var value = {msg: 'Hello world'};
    var id = 'id1';
    db.put('encrypt-store', value, id); // value and record_id encrypted on database
    db.values('encrypt-store').done(function(values) {
        console.log(values); // unencrypted values
    });
    db.get('encrypt-store', id).done(function(value) {
        console.log(value); // decrypted record value
    });

Since data is encrypted, indexing is not available.  Note that enabling encryption by itself does not encrypt data.

## Encryption key rotation ##

With symmetric encryption, the level of confidentiality depends on the protection of the keys. To reduce exposure of key, encryption keys are updated periodically.

Multiple encryption keys can be provided. Only the first key is used for encryption. All keys are used for decryption until success. Decryption is deem considered success if the required key is available and encrypted value can be parsed into JSON.

See [demo application](http://yathit.github.io/sample-encryption/index.html) to try out.

Additional source code is available upon request.
