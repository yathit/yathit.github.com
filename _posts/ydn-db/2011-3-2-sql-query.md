---
layout: article
title:  "SQL Query"
date:   2011-3-2
categories: ydn-db
tag: article
---

Descripting query in declearative SQL statement is very powerful. Unfortunately IndexedDB do not have SQL processor. This library parse SQL statement, prepare query as described in previous sections and execute them.

Currently SQL implementation is very basic.

This section use previous database.

    db = new ydn.db.Storage('nosql-test-1', author_article_topic_schema);

### SELECT ###

    db.executeSql('SELECT * FROM author LIMIT 3').then(function(results) {
      console.log(results);
    }, function(e) {
      throw e;
    });

    db.executeSql('SELECT title FROM article LIMIT 5 OFFSET 50').then(function(results) {
      console.log(results);
    }, function(e) {
      throw e;
    });

    db.executeSql('SELECT * FROM article WHERE license = \'SA\' LIMIT 5 OFFSET 50').then(function(results) {
      console.log(results);
    }, function(e) {
      throw e;
    });


### Aggregration ###

    db.executeSql('SELECT COUNT(*) FROM author').then(function(results) {
      console.log(results);
    }, function(e) {
      throw e;
    });

    db.executeSql('SELECT MAX(publish) FROM article').then(function(results) {
      console.log(results);
    }, function(e) {
      throw e;
    });