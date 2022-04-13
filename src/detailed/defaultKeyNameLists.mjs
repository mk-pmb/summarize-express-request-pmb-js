// -*- coding: utf-8, tab-width: 2 -*-
/*

Key Name Lists
==============

If your config has entries named the same as a default Key Name List,
each of them must be either `false` to skip that list,
or an array of strings. The latter means your additions to the
default list, and they will be merged to the top of the list.

Each list makes one section of the report, unless otherwise noted.

The first list that claims a request key name will have it,
and will deprive any later sections of it.

*/
const keyNameLists = {

  boringKeys: [
    // This section will not show up in the report, but it will
    // consume keys early as if it were the first section.
  ],

  verbLineKeys: [
    'baseUrl',
    'method',
    'originalUrl',
    'url',
  ],

  hotDetails: [
    'headers',
    'params',
    'query',
  ],

  advancedDetails: [
    'rawHeaders',
    'rawTrailers',
    'statusCode',
    'statusMessage',
  ],

  defaultBoringKeys: [
    // Similar to boringKeys, but it's processed last, so that any
    // previous sections get a chance to snatch these request keys
    // first and include them in the report.

    'aborted',
    'client',
    'complete',
    'end',
    'httpVersion',
    'httpVersionMajor',
    'httpVersionMinor',
    'json',
    'next',
    'res',
    'send',
    'socket',
    'upgrade', // see "upgrade" note below
  ],

}; // End of normal Key Name Lists

/*

Notes
=====

upgrade
-------

* It's probably inherited from Node.js's request object: [Definition
  ](https://github.com/nodejs/node/blob/69f487efc7/lib/_http_incoming.js#L79)
* The [node.js API docs
  ](https://github.com/nodejs/node/blob/3caa2c1a00/doc/api/http.md)
  only explain the same-named event.
* It's not in [the express.js API docs](http://expressjs.com/en/4x/api.html)




*/


export default keyNameLists;
