// -*- coding: utf-8, tab-width: 2 -*-

import loMapValues from 'lodash.mapvalues';

import popDumpRqKey from './popDumpRqKey.mjs';


function summ(how, origReq) {
  const rqRemain = { ...origReq };
  const {
    boringKeys,
    defaultBoringKeys,
    ...sectionKnls
  } = how.knl;

  function justDrop(l) { if (l) { l.forEach(k => delete rqRemain[k]); } }
  justDrop(boringKeys);
  const [
    verbLineDict,
    ...otherSectionDicts
  ] = Object.values(loMapValues(sectionKnls,
    l => popDumpRqKey(origReq, rqRemain, l)));
  const summary = Object.assign({
    '^': verbLineDict,
  }, ...otherSectionDicts);
  justDrop(defaultBoringKeys);

  (function reportUnexpectedKeys() {
    const { unexKey, lowLineBoring } = how;
    if (unexKey === null) { return; }
    const unexReport = {};
    Object.entries(rqRemain).forEach(function describe([k, v]) {
      if (lowLineBoring && k.startsWith('_')) { return; }
      unexReport[k] = String(v && typeof v);
    });
    if (Object.keys(unexReport).length) { summary[unexKey] = unexReport; }
  }());

  return summary;
}


export default summ;
