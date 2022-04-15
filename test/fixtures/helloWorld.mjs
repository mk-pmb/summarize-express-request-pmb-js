// -*- coding: utf-8, tab-width: 2 -*-

import tu from '../testUtil.mjs';


const baseUrl = '/hello/world';
const qryStr = '?hello=world';
const query = { hello: 'world' };


const verbLineDict = {
  baseUrl,
  method: 'GET',
  originalUrl: baseUrl + qryStr,
  url: '/' + qryStr, // NB: Express creates this slash from thin air.
};

const headerPairs = [
  ['Host', 'localhost'],
  ['User-Agent', 'Hello World Mock/1.1'],
  ['Accept-Encoding', 'gzip, deflate'],
  ['Connection', 'keep-alive'],
];

const hotDetails = {
  headers: tu.pairs2obj_lckey(headerPairs),
  params: { '0': 'test' },
  query,
};

const advancedDetails = {
  rawHeaders: headerPairs.flat(),
  rawTrailers: [],
  statusCode: null,
  statusMessage: null,
};

const lowlineDummies = {
  _consuming: false,
  _dumped: false,
  _events: { mock: '_events' },
  _eventsCount: 2,
  _maxListeners: undefined,
  _parsedUrl: { mock: '_parsedUrl' },
  _readableState: { mock: '_readableState' },
};

const lowlineDescrs = {
  _consuming: 'false',
  _dumped: 'false',
  _events: 'object',
  _eventsCount: 'number',
  _maxListeners: 'undefined',
  _parsedUrl: 'object',
  _readableState: 'object',
};

const boringDummies = {
  aborted: false,
  client: { mock: 'client' },
  complete: false,
  httpVersion: '1.1',
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  next: tu.bomb('next'),
  res: { mock: 'res' },
  socket: { mock: 'socket' },
  upgrade: false,
};

const boringDescrs = {
  aborted: 'false',
  client: 'object',
  complete: 'false',
  httpVersion: 'string',
  httpVersionMajor: 'number',
  httpVersionMinor: 'number',
  next: 'function',
  res: 'object',
  socket: 'object',
  upgrade: 'false',
};


const EX = {
  verbLineDict,
  hotDetails,
  advancedDetails,

  boringDescrs,
  boringDummies,
  lowlineDescrs,
  lowlineDummies,

  ...tu.mockRequestApi,
};


export default EX;
