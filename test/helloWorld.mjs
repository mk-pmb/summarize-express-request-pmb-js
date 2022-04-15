// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import hwFixt from './fixtures/helloWorld.mjs';
import summarize from '../src/index.mjs';


test('helloWorld: detailed: defaults', (t) => {
  t.plan(1);
  const req = hwFixt.assemble();
  const sum = summarize.detailed()(req);
  t.same(sum, hwFixt.detailedBase());
});

test('helloWorld: detailed: defaultBoringKeys', (t) => {
  t.plan(1);
  const req = hwFixt.assemble();
  const sum = summarize.detailed({ defaultBoringKeys: false });
  t.same(sum(req), {
    ...hwFixt.detailedBase(),
    unexpected: hwFixt.boringDescrs,
  });
});

test('helloWorld: detailed: lowLineBoring', (t) => {
  t.plan(1);
  const req = hwFixt.assemble();
  const sum = summarize.detailed({ lowLineBoring: false });
  t.same(sum(req), {
    ...hwFixt.detailedBase(),
    unexpected: hwFixt.lowlineDescrs,
  });
});
