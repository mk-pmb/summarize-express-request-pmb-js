
<!--#echo json="package.json" key="name" underline="=" -->
summarize-express-request-pmb
=============================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Summarize an Express-style HTTP request object. Tries to make result
JSON-friendly.
<!--/#echo -->



API
---

This module exports an object that holds these functions:

### logLineArgs(opt)

Returns a `function summarizeRequest(req)`,
which takes the request object and returns a summary that

* is an array suitable for passing as arguments to `console.log()`,
* tries to be very concise.

`opt` is an optional options object that supports these optional keys:

* `rawQuery` (boolean, default: true):
  Whether to report the original query string as part of the URL.
  Set to `false` to remove everything _after_ the initial question mark.
* `parsedQuery` (boolean, default: false):
  Whether to report the data parsed from the query string, if any.
  * ⚠ Passing this to `console.log` can easily result in multi-line output.



### detailed(opt)

Returns a `function summarizeRequest(req)`,
which takes the request object and returns a summary that

* is a native (plain old) JS object,
* focusses on interesting parts,
* is rather detailed nonetheless,
* and usually is suitable for being JSON-encoded.

`opt` is an optional options object that supports these optional keys:

* (All names of [default Key Name Lists
  ](src/detailed/defaultKeyNameLists.mjs)):
  See comments in that file for how to adjust them.

* `lowLineBoring` (boolean, default: true):
  Whether all keys whose name starts with U+005F low line (`_`)
  are treated as being in the `defaultBoringKeys` Key Name List.

* `unexpectedKeysKey` (string or `null`, default: `'unexpected'`):
  Where to put the list of unexpected request keys.
  `null` = omit from report.





Usage
-----

:TODO:



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
