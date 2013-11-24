---
layout: article
title:  "Getting started"
date:   2012-1-1
categories: ydn-db
tag: article
---

## Setup ##

YDN-DB is a pure javascript library, which uses HTML5 browser database sunch as IndexedDB, WebDatabase (WebSQL) and WebStorage (localStorage). Most modern browsers including IE10, Chrome, Firefox and Safari support either IndexedDB or WebSQL. The library can also be used in web client such as phonegap, WebView and UIWebView mobile clients.


[Download](http://dev.yathit.com/index/downloads.html) a javascript file from the pre-compiled distribution files. These file are minified for selected feature set. For development you should want to use ydn.db-x.x-dev.js, which enforces assertion and provides logging.

In browser:

    <script type="text/javascript" src="ydn.db-iswu-core-e-qry-dev.js"></script>

In an AMD loader:

    require({
      'packages': [{'name': 'ydn', 'location': 'path/to/ydn-db', 'main': 'ydn.db-iswu-core-e-qry-dev'}]
    }, ['ydn'], function(ydn) {
      console.log(ydn.db.version);
      var db = new ydn.db.Storage('db name');
    });

The namespace of this library is ydn.db. The script provide main javascript class object, called ydn.db.Storage.

> Pages in this sections include the YDN-DB script and some preloaded data and utility functions, so that you follow the sample code in your browser's developer console to see in action.

## Database connection ##

A simple way to initialize a database is by specifying a database name.

    db = new ydn.db.Storage('db-name');
    db.put('store-name', {message: 'Hello world!'}, 'id1');
    db.get('store-name', 'id1').always(function(record) {
      console.log(record);
    });

The storage instance, ydn.db.Storage, connects to suitable data storage mechanisms starting from IndexedDB to WebSQL to localStore. It will open existing database or create a new database with the given database name.

 All database operation methods are asynchronous and result are  return as a deferred object. It is also called future or promise object. The resulting deferred object accepts two asynchronous functions: done to receive value on success event and fail to received in case of error. A convenient then  accept both of them. In case of error, this library always invokes error callback with Error object with has name attribute and message attribute.

If you use raw source code, deferred object is [`goog.async.Deferred`](http://code.google.com/p/closure-library/source/browse/trunk/third_party/closure/goog/mochikit/async/deferred.js) class, which is also similar to [JQuery `Deferred`](http://api.jquery.com/category/deferred-object/)  or [`WinJS.Promise`](http://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx). The compiled js output is modified so that resulting deferred object is compatible with them.

## Storing data ##

Use put method to insert a new or update existing record(s).

### Out-of-line key ###

    db.put('store1', {test: 'Hello World!'}, 123)

The first argument is store name. It is object store name in IndexedDB and TABLE name in WebSQL. Since a schema is not given, a table or object store will be created if not exist.

The second argument is the record we want to store. It should be a simple object. A structured clone of the object is stored in the database. A structured clone is similar concept in JSON serialization. But it is more efficient and more powerful. File and Blob are clonable, while  DOM Element is not. If the record fail to clone it, underlying database API shall throw DataCloneError.

 The third argument is primary key of the record. A key can be number, string, Date or simple array. Since we are given primary key separately from the record, it is called out-of-line key.

 Use get method to retrieve it by the primary key.

     req = db.get('store1', 123);
     req.done(function(record) {
       console.log(record);
     });
     req.fail(function(e) {
       throw e;
     });

 Deferred object is not only used for asynchronous workflow, but also for error control. An error should be handled, at least, as above by re-throwing the error object.

### In-line key ###

Primary key can be embedded into the record value. We specify how to extract the primary key from the record by using keyPath.

    record = {id: 'abc', message: 'Testing in line key'};
    req = db.put({name: 'store2', keyPath: 'id'}, record);
    req.done(function(key) {
      console.log(key);
    });
    req.fail(function(e) {
      throw e;
    });

Here, we are giving store schema in the first argument instead of just store name. The two store schema attribute are 'name' and 'keyPath'. A record is inserted to 'store2' store by using primary key 'abc'. Since primary key is specified in the record object, it is called, in-line key.

Set autoIncrement of the store schema attribute to true to let the database engine to generate a increasing primary key when it is not provided. Auto key generation works for both in-line and out-of-line key.

## Retrieving ##

Keys are the most efficient way to retrieve a record. If we don't know the key, we must browse the whole store to find it. Let us add some more records.

    db.put('store2', [{id: 'a', message: 'a record'}, {id: 'b', message: 'b record'}]);

Notice multiple records are stored by using array of records in one transaction.

Record values are retrieved by using values database operation method.

    db.values('store2').done(function(records) {
      console.log(records);
    });

We can also retrieve only primary key of the records using keys database operation method. .

    db.keys('store2').done(function(records) {
      console.log(records);
    });

In contrast to listing record values, key listing is much faster because it obviates serialization. Key is very important for effective querying. And hence keys should be carefully constructed. In addition to primary key, there is secondary key, which is simply called as index key.

## Schema ##

While running the above codes, we modified database schema on creating new stores. It is not preferable in production usage, because modifying database schema is not a trivial process. It need to notified all connections on other tabs including worker thread as well. Additionally we should use a fixed schema through out a web application for consistency. The database schema from the database connection is retrieved as follow.

    db.getSchema(function(schema) {
      console.log(schema);
    });

You will find database version is undefined, since we are not giving a database version. The database is said to be in auto-version mode.

 A database schema is basically defining object stores or TABLE in WebSQL. An example is

    var author_store_schema = {
      name: 'author',
      keyPath: 'email', // optional,
      autoIncrement: false, // optional.
      indexes: [
        {
          name: 'born', // optional
          keyPath: 'born',
          unique: false, // optional, default to false
          multiEntry: false // optional, default to false
        }, {
          keyPath: 'company'
        }, {
          keyPath: 'hobby',
          multiEntry: true
        }
      ] // optional, list of index schema as array.
    };
    schema = {
      stores: [author_store_schema]
    };

The above schema define one object store. The name of object store is 'author'. Since keyPath is defined, it is using in-line key. Since autoIncrement is false, all records must have a valid key in its 'email' field attribute.

The above schema define one object store. The name of object store is 'author'. Since keyPath is defined, it is using in-line key. Since autoIncrement is false, all records must have a valid key in its 'email' field attribute.

 The object store 'author' has three secondary indexes, namely 'born', 'company' and 'hobby'. In WebSQL, it is a column name. If name is not defined, it is default to keyPath. An example 'author' record will be:

    author_1 = {
      email: 'me@aaronsw.com',
      born: 531763200000,
      first: 'Aaron',
      last: 'Swartz',
      company: 'Reddit',
      hobby: ['programming', 'blogging', 'politics']
    };


If index schema attribute, unique is true, unique constraint is applied on the index key. If unique constraint is void during a database write operation, ConstriantError will issue.

   The index schema attribute, multiEntry is meaningful only for key value of array data type. The index 'hobby' has multiEntry of true, so that each element in of the array hobby are indexed individually.
   In addition to 'stores' attribute, database schema take 'version' attribute. If version number is specified, the library will open with the given version. If the client browser do not have or lower than the given version, it will be upgraded as necessary. Client version must not be higher than given version. If client version is the same as given version, the database schema must be similar. If not similar, the library will refuse to connect the database. This library will not work, if schema is not known.

   Let us generate some data for querying.

    genAuthors = function(n) {
      var out = [];
      for (var i = 0; i < n; i++) {
        out[i] = {
          first: randName(),
          last: randName(),
          born: +(new Date(1900+Math.random()*70, 12*Math.random(), 30*Math.random())),
          email: randEmail(),
          company: pickOne(companyList),
          hobby: pickMany(hobbyList)
        };
      }
      return out;
    };



    db = new ydn.db.Storage('test-2', schema);
    var authors = genAuthors(10000);
    db.put('author', authors).then(
      function(ids) {
        console.log(ids.length + ' authors put.');
      }, function(e) {
        throw e;
      }
    );

`put` method uses multiple asynchronous threads and generally very fast.

## Basic query ##

If you don't know the exact key, you must enumerate the whole or a range of object store records. Here the process is called querying. Instead of enumerating records, you can only enumerate only key. This is called _key only query_. Key only query is very efficient because the most expensive operations of IO and de-serialization are avoided.

### Counting ###

 Generally NoSQL database does not provide counting, but IndexedDB API does.

### Sorting ###

Keys are sorted in the database. The following query result is sorted by 'email', the primary key.

    var key_range = null;
    db.from('author').list(10).done(function(records) {
      console.log(records);
    });

If sorting is require in a field, the field is indexed. The following illustrate iterating records sorted by 'born' date field.

    var reverse = false; // sorted by ascending of date
    db.from('author').order('born', reverse).list(10).done(function(records) {
      console.log(records);
    });
    The following example retrieve list of unique hobbies.

    db.from('author').select('hobby').unique(true).list().done(function(hobby) {
      console.log(hobby);
    });


### Filtering ###

he primary way of filtering is query by [key range](http://dev.yathit.com/api-reference/ydn-db/keyrange.html). More sophisticated filtering are iterated merging of key range results. We dedicate these sophisticated filtering on later sections.

The following query finds authors born in 1942 February.

    var lower = + new Date(1942, 1, 1); // 1942 February 1
    var upper = + new Date(1942, 2, 1); // 1942 March 1
    db.from('author').where('born', '>=', lower, '<', upper).list().done(function(records) {
      console.log(records);
      records.map(function(x) {
        console.log(x.first + ' ' + x.last + ' ' + new Date(x.born));
      });
    });

### Paging ###

`keys` and `values` methods accept `limit` and `offset` for paging. Iterator has _position state property_. The position of an iterator is the last cursor position defined by effective key and primary key.

The following query list all authors having hobby in 'camping' using iterator and paging.

    var q = db.from('author').where('hobby', '=', 'camping');
    q.list(10).then(function(records) {
      console.log(records);
      console.log('From ' + records[0].email + ' to ' + records[records.length - 1].email);
    }, function(e) {
      throw e;
    });

Also notice that the result is sorted by primary key. To continue next page, call list method again.

    q.list(10).then(function(records) {
      console.log(records);
      console.log('From ' + records[0].email + ' to ' + records[records.length - 1].email);
    }, function(e) {
      throw e;
    });

Notice that offset value is not used.

### Updating ###

Use open method to update records.

    var iter = new ydn.db.ValueIterator('author', ydn.db.KeyRange.starts('a'));
    var mode = 'readwrite';
    var updated = 0;
    var deleted = 0;
    db.open(function(cursor) {
      var author = cursor.getValue();
      if (author.company == 'Oracle') {
        cursor.clear().then(function(e) {
          deleted++;
        }, function(e) {
          throw e;
        });
      } else if (author.category != 'A') {
        author.category = 'A';
        cursor.update(author).then(function(e) {
          updated++;
        }, function(e) {
          throw e;
        });
      }
    }, iter, mode).then(function() {
      console.log(updated + ' records updated, ' + deleted + ' deleted.');
    }, function(e) {
      throw e;
    });

### Debugging ###

Use dev version of the compile JS file during development. Put .map file in the same directory as js file. Turn on source map for debugging with full source code. Use build-in logging facility to detail logging.

    var module = 'ydn.db';
    var level = 'finer'; // warning, info, fine, finest, all
    ydn.debug.log(module, level);

### Summary ###

 <table class="gridtable">
  <caption>Database operation methods</caption>
  <thead>
    <tr>
      <th>Read</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>Get a record</td>
    </tr>
    <tr>
      <td>keys</td>
      <td>Get a list ordered keys, or effective keys of an iterator<br>
      </td>
    </tr>
    <tr>
      <td>values</td>
      <td>Get a list ordered records, or reference values of an
        iterator<br>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Write</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>add</td>
      <td>Add record(s)</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>Delete record(s)</td>
    </tr>
    <tr>
      <td>put</td>
      <td>Add or update record(s)</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Iterate</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>map</td>
      <td>Map reference values of an iterator</td>
    </tr>
    <tr>
      <td>open</td>
      <td>Open an iterator for read/write operation</td>
    </tr>
    <tr>
      <td>reduce</td>
      <td>Reduce reference values of an iterator</td>
    </tr>
    <tr>
      <td>scan</td>
      <td>Scan keys of an iterator</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Aggreate</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>Count records</td>
    </tr>
  </tbody>
</table>

## Exercises ##


<div class="exercise">
  <ol>
    <li><details name="DataCloneError"><summary>Write a script that will
          throw DataCloneError.</summary>
        <p>There are two primary way that cause DataCloneError.</p>
        <p>One is the data include unsupported data type.</p>
        <pre>db.put('store1', {ele: document.getElementsByTagName('div')[0]}, 2)</pre>
        <p>Another one is circular referencing.</p>
        <pre>cir_array = [1];
cir_array.push(cir_array);
db.put('store1', {data: cir_array}, 3);</pre>
      </details></li>
    <li><details name="DataError"><summary>Write a script that will
          throw DataError.</summary></details></li>
    <li><details name="qa-function"><summary>Why a function cannot be
          persisted in the database? How will you re-store an javascript
          object?</summary>
        <p>Function is not persisted in the database because function is
          not serialized by structured clone algorithm.</p>
        <p>Unlike JSON object, javascript object has methods, which are
          functions and will not be restored. The technique for
          restoring javascript object is similar to serialization in
          other programming language. A static factory method or the
          constructor that accept serialized object data is used.</p>
      </details></li>
    <li><details name="qa-double-sort"><summary>How do you create an
          index to 'article' store to get primary keys sorted by 'first'
          followed by 'last'?</summary></details></li>
    <li><details name="qa-exists"><summary>How will you test a key is
          existed in an object store?</summary>The most effecient way to
        check existence of key is using <code>count</code> method,
        which return 1 if the key exists in the object store. <code>get</code>
        method is not only inefficient, since it involves record
        retrieval, but also fail to distinguish between undefined record
        value and non-existing key.</details></li>
    <li><details><summary>Explain indexing is useful for projection
          query or not? Plan a database schema to facilitate projection
          querying to 'first' and 'last' field of 'article' store.</summary></details></li>
    <li><details><summary>How will you query a list of emails from a
          certain domain, such as 'gmail.com'?</summary></details></li>
    <li><details><summary>IndexedDB API does not support indexing
          boolean value. Why? What are the implications?</summary></details></li>
    <li><details><summary>Describe how listed index can be used for
          many-to-many relationship.</summary></details></li>
  </ol>
</div>
