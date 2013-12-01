---
layout: article
title:  "Workflow"
---

## Database connection ##

Currently client side database are temporary storage. The data can be wipe out anytime without informing to user or script. Data corruption instance has been observed to SQLite and Chrome IndexedDB during opening the database. If corruption occur, whole database or only certain object store can wipe out.

The most unpredictable operation is database connection. For an application to robust, storage events dispatched from the storage instance should be listened and validate data integrity.

