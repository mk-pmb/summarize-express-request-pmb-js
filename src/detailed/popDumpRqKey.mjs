// -*- coding: utf-8, tab-width: 2 -*-

function pop(origReq, reqRemain, list) {
  if (!list) { return; }
  const p = {};
  list.forEach((k) => {
    let v = reqRemain[k];
    let suf = '';
    delete reqRemain[k]; // eslint-disable-line no-param-reassign
    const t = (v && typeof v);
    if (t === 'function') {
      suf += '()';
      v = v.call(origReq);
    }
    if (v === undefined) {
      suf += ' ø';
      v = origReq[k];
    }
    if (v === undefined) { v = 'UNDEF'; }
    p[k + suf] = v;
  });
  return p;
}

export default pop;
