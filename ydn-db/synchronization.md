---
layout: article
title:  "Synchronization"
---

Data stored in client side storage mechanism is [ephemeral](https://developers.google.com/chrome/whitepapers/storage), although it may be possible to specified as persistent storage in the future through [quota management API](http://www.w3.org/TR/quota-api/). User agents are allowed to wipe out data anytime if deem necessary such as in case of low disk space or exceeding quota limit. For example mobile Safari browser will arbitrarily limit storage size to 50MB. Browser will not inform data lost to user or script. Critical data must be send back to the server.

Synchronization logic can be implemented by pre-database or in-database process.

In pre-database synchronization technique, database is used as secondary storage or caching. This technique required no additional functionality from database library. StoreEvent and RecordEvent dispatch from the storage instance may useful in this scenario.

In-database synchronization are handled by the library. Library usage is similar to non-synchornization usage. But, additional configuration and handler HTTP request are to be implemented. Before discussing synchronization process, we need to understand how the library handle cache invalidation and conflict resolution. These processes require metadata for each resource (record in this library, model in MVC architecture).

### Metadata ###

Metadata are specified in HTTP respond headers. For performance reason, several standardized URL format exist to retrieved only metadata for a specific resource or a list of resources (also know as collection resource). Metadata are store in client database along with the record value or in separate medata data store. Upon retrieval, these metadata are stripped from record value, but it may set to keep in record value as well through configuration.

HTTP header name are case insensitive. This library always use lower case header name as metadata attribute name.

It should be noted that, for cross domain request, header name must be exposed setting [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS) in origin server.

[*etag*](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11): Entity tag is used for cache invalidation and conditional retrieval and update.

[*last-modified*](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.29): Last modified time value is used for conflict resolution. In case of conflicting update in both client and server, an algorithm may automatically set last modified entity as winner. Additionally, if etag is not exposed, last modified time value is used for conditional retrieval and update. It should be note however that last modified time value is only accurate to second.

[*expires*](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21): The Expires entity-header field gives the time after which the response is considered stale. If Expires header field is not expose, it is calculated from Cache-Control's max-age value, if it presents.

*date*: Date refer to as current time value, which is not read from HTTP header, but set by using Date.now() at the time of storing metadata. Date value may be used to invalidate cache.

*key*: Resource key is URI path. Generally this is same as record key, but may have namespace prefix.

### Cache invalidation ###

Any database CRUD operation requires to invalidate the resource to origin server for freshness. There are two levels of invalidation for a read operation, opportunistic cache invalidation and conditional retrieval. Opportunistic cache invalidation use expires medata value for freshness. If resource entity is not expired, GET request is noted send to origin server for reading the entity. Immutable store also never send GET request if a record exist in the client database. Otherwise a conditional GET request is send either with If-None-Match etag or If-Unmodified-Since last-updated precondition. For write operation, If-Match etag or If-None-Match last-updated precondition is used.

### Conflict resolution ###

 All database write operation send the request with either with ETag or Last-Updated  pre-condition. In case of failing precondition, the deferred object invoke fail callback with ConflictEvent, which encapsulate both client and server record value including metadata. If the Event object is not resolved in the fail callback, the event is resolve by default algorithm.

### Synchronizing with a RESTful service ###

Synchronizing with RESTful service is pretty straight forward. The following example use Checkvist Open API, which follow REST principles for obtaining and updating the data. Currently the API does not expose medata data on entity request header. For entity 'checklists', the resource URI and sample data for key 190078 is:

     https://beta.checkvist.com/checklists/190078.json

    {
      id: 190078
      name: "test sync app"
      public: false
      updated_at: "2013/06/08 22:57:09 +0000"
      user_count: 1
      user_updated_at: null
    }

Store schema is declared as follow:

    var schema = {
        stores: [{
          name: 'checklists',
          keyPath: 'id',
          Sync: {
            format: 'json',
            transport: service,
            Options: {
              baseUri: '/',
              delimiter: '/'
            }
          }
        }]
    };

The Sync attribute value specify synchronization information of the store. HTTP requests are made by HTTP transport service object specified by transport attribute in Sync options. A HTTP transport service is an object which has a method of request, which take argument object having fields of

 * path - type: string: The URL to handle the request.
 * method - type: string: The HTTP request method to use. Default is 'GET'.
 * params - type: Object: URL params in key-value pair form.
 * headers - type: Object: Additional HTTP request headers.
 * body - type: string: The HTTP request body (applies to PUT or POST).
 * callback - type: Function: HTTP response object having the following fields described below.

Response object has the following fields

 * url - type: string: The input URL.
 * status - type: string: HTTP response status.
 * contentType - type: string: HTTP response content type.
 * reponseText - type: string: HTTP response text.
 * response - type: Object: HTTP response.

It is similar to as defined in [Google Javascript client library](https://code.google.com/p/google-api-javascript-client/wiki/ReferenceDocs).


    /**
     * Send request to checkvist server.
     * @link https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
     * @param {Object} args request arguments, compatible with Google javascript
     * client library.
     */
    CheckvistApp.prototype.request = function(args) {
      var path = args.path;
      var method = args.method || 'GET';
      var params = args.params || {};
      params['username'] = this.session.username;
      if (this.session.token) {
        params['token'] = this.session.token;
      }
      var host = 'beta.checkvist.com';
      var url = 'https://' + host + path + '.json';
      var query = [];
      for (var q in params) {
        query.push(q + '=' + encodeURIComponent(params[q]));
      }
      url += '?' + query.join('&');
      var req = new XMLHttpRequest();
      req.open(method, url, false);
      // req.withCredentials = true;
      var me = this;
      req.onload = function(e) {
        var raw = {
          body: req.responseText,
          status: req.status,
          statusText: req.statusText,
          headers: {}
        };

        var header_lines = req.getAllResponseHeaders().split('\n');
        for (var i = 0; i < header_lines.length; i++) {
          var idx = header_lines[i].indexOf(':');
          if (idx > 0) {
            var name = header_lines[i].substr(0, idx).toLowerCase();
            var value = header_lines[i].substr(idx + 1).trim();
            raw.headers[name] = value;
          }
        }

        args.callback(JSON.parse(req.responseText), raw);
      };
      console.info('sending ' + url);
      req.send();
    };

A complete offline application can be found [Checkvist sync demo app](http://dev.yathit.com/demo/checkvist/checkvist-sync.html).

### Synchronizing with YDN-DB ###

YDN-DB have build in synchronization support for AWS S3 ([Amazon simple storage service](http://aws.amazon.com/documentation/s3/)), [ATOM syndicate format](http://www.ietf.org/rfc/rfc4287.txt), [OData](http://odata.org/), [GData](https://developers.google.com/gdata/), GCS ([Google cloud storage](https://developers.google.com/storage/)).

    var schema = {
      stores: [
        {
          name: 'st',
          Sync: {
            format: 's3'
            transport: gapi.client
          }
        }
      ]
    };
