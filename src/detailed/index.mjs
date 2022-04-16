// -*- coding: utf-8, tab-width: 2 -*-

import configure from './configure.mjs';
import summarize from './summarize.mjs';

export default function makeDetailedSummarizer(opt) {
  const how = configure(opt);
  return function summarizeRequest(req) { return summarize(how, req); };
};
