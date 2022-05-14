// -*- coding: utf-8, tab-width: 2 -*-

const dfKnl = {
  // For how this works, see `defaultKeyNameLists.req.mjs`.

  boringKeys: [
  ],

  verbLineKeys: [
    '_header',
    '_sent100',
    'finished',
    'headersSent',
    'statusCode',
    'statusMessage',
    'writable',
  ],

  hotDetails: [
    '_closed',
    '_contentLength',
    '_expect_continue',
    '_hasBody',
    '_headerSent', // prefer .headersSent, see docs.
    'chunkedEncoding',
    'outputSize',
  ],

  advancedDetails: [
    '_defaultKeepAlive',
    '_keepAliveTimeout',
    '_last',
    '_trailer',
    'destroyed',
    'outputData',
    'shouldKeepAlive',
    'useChunkedEncodingByDefault',
  ],

  defaultBoringKeys: [
    '_events',
    '_eventsCount',
    '_maxListeners',
    '_onPendingData',
    '_removedConnection',
    '_removedContLen',
    '_removedTE',
    'locals',
    'maxRequestsOnConnectionReached',
    'req',
    'sendDate',
    'socket',
  ],

};

export default dfKnl;
