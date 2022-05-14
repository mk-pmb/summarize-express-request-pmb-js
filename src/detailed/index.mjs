// -*- coding: utf-8, tab-width: 2 -*-

import dfKnlReq from './defaultKeyNameLists.req.mjs';
import dfKnlRsp from './defaultKeyNameLists.rsp.mjs';
import configure from './configure.mjs';
import summarize from './summarize.mjs';

const EX = function makeDetailedSummarizer(opt) {
  const how = configure(dfKnlReq, opt);
  return function summarizeRequest(req) { return summarize(how, req); };
};


Object.assign(EX, {

  response(opt) {
    const how = configure(dfKnlRsp, opt);
    return function summarizeResponse(rsp) { return summarize(how, rsp); };
  },

});


export default EX;
