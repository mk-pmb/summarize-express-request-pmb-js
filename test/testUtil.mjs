// -*- coding: utf-8, tab-width: 2 -*-

const tu = {

  pairs2obj_lckey(pairs) {
    return Object.fromEntries(pairs.map(([k, v]) => [k.toLowerCase(), v]));
  },

  bomb(msg) {
    const f = function boom() { throw new Error(f.msg); };
    f.msg = 'Boom! ' + msg;
    return f;
  },

  mockRequestApi: {

    detailedBase() {
      return {
        '^': this.verbLineDict,
        ...this.hotDetails,
        ...this.advancedDetails,
      };
    },

    assemble() {
      return {
        ...this.verbLineDict,
        ...this.hotDetails,
        ...this.advancedDetails,
        ...this.boringDummies,
        ...this.lowlineDummies,
      };
    },

  },


};


export default tu;
