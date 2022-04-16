// -*- coding: utf-8, tab-width: 2 -*-

const noCacheRgx = /(?:^|;\s*)no-cache(?=;|$)/;

function hasNoCacheHeader(req, key) {
  const v = req.headers[key];
  return (v && noCacheRgx.test(v) && '↺');
}


function logLineArgs(how, req) {
  const { query } = req;
  const hasQuery = (Object.keys(query).length ? '?' : '');

  const flags = [
    hasNoCacheHeader(req, 'pragma'),
    hasNoCacheHeader(req, 'cache-control'),
    hasQuery,
  ].filter(Boolean).join('');

  let { url } = req;
  if (how.rawQuery === false) { url = url.split(/(\?)/).slice(0, 2).join(''); }

  const info = [
    req.method,
    url,
    flags,
    (hasQuery && how.parsedQuery && query),
  ].filter(Boolean);

  return info;
}


export default function makeLogLineArgsSummarizer(opt) {
  const how = { ...opt };
  return function summarizeRequest(req) { return logLineArgs(how, req); };
};
