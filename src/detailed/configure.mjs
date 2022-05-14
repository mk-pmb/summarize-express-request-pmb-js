// -*- coding: utf-8, tab-width: 2 -*-

import loMapValues from 'lodash.mapvalues';
import mustBe from 'typechecks-pmb/must-be';
import objPop from 'objpop';


function configure(dfKnl, origOpt) {
  const optPop = objPop(origOpt, { mustBe }).mustBe;
  const how = {
    lowLineBoring: optPop('bool', 'lowLineBoring', true),
    unexKey: optPop('str | nul', 'unexpectedKeysKey', 'unexpected'),
    knl: loMapValues(dfKnl, function merge(d, k) {
      const v = optPop('ary | fal | undef', k);
      if (v === false) { return v; }
      if (v) { return [...v, ...d]; }
      return d;
    }),
  };
  optPop.expectEmpty();
  return how;
}



export default configure;
