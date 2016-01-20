(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './example', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./example'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.example, global.register, global.babelPolyfill);
    global.instance = mod.exports;
  }
})(this, function (exports, _example) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.example = undefined;
  var example = exports.example = new _example.Example({
    test: 'test'
  });
  example.options.console.log(example.options);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFJVyw0QkFBVSxxQkFBWTtBQUMvQixVQUFPLE1BQVA7R0FEbUIiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IEV4YW1wbGUgfSBmcm9tICcuL2V4YW1wbGUnO1xuXG5leHBvcnQgbGV0IGV4YW1wbGUgPSBuZXcgRXhhbXBsZSh7XG4gIHRlc3QgOiAndGVzdCdcbn0pO1xuXG5leGFtcGxlLm9wdGlvbnMuY29uc29sZS5sb2coZXhhbXBsZS5vcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
