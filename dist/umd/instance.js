(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './example', 'source-map-support/register'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./example'), require('source-map-support/register'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.example, global.register);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHVyw0QkFBVSxxQkFBWTtBQUMvQixVQUFPLE1BQVA7R0FEbUIiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgeyBFeGFtcGxlIH0gZnJvbSAnLi9leGFtcGxlJztcblxuZXhwb3J0IGxldCBleGFtcGxlID0gbmV3IEV4YW1wbGUoe1xuICB0ZXN0IDogJ3Rlc3QnXG59KTtcblxuZXhhbXBsZS5vcHRpb25zLmNvbnNvbGUubG9nKGV4YW1wbGUub3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
