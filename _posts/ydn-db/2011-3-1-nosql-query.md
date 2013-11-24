---
layout: article
title:  "Query"
date:   2011-3-1
categories: ydn-db
tag: article
---

IndexedDB is a NoSQL database and does not have a SQL processor. Query in IndexedDB is scanning keys over a range. To be fair, SQL processor performs the same thing in the lower level during its query.

In javascript use case, such low level key scanning gives perceive fast response since we are getting immediate result. Whereas WebSQL, all processing are performed in the database and return to javascript only after all finished. Consequencely memory and CPU times may be wasted as well.
Filtering

Before we start, let us populate the database with some data base on previous schema. Schema definition and random data generation are defined in [data-seeding.js](http://dev.yathit.com/js/ydn-db/data-seeding.js) file.

