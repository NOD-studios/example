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
    global.index = mod.exports;
  }
})(this, function (exports, _example) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.example = undefined;
  var example = exports.example = new _example.Example();
  example.status.then(function (packageContent) {
    example.console.log({
      packageContent: packageContent
    });
  }).catch(function (error) {
    example.console.error(error);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFJVyw0QkFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgRXhhbXBsZSB9IGZyb20gJy4vZXhhbXBsZSc7XG5cbmV4cG9ydCBsZXQgZXhhbXBsZSA9IG5ldyBFeGFtcGxlKCk7XG5cbmV4YW1wbGUuc3RhdHVzXG4gIC50aGVuKChwYWNrYWdlQ29udGVudCkgPT4ge1xuICAgIGV4YW1wbGUuY29uc29sZS5sb2coeyBwYWNrYWdlQ29udGVudCB9KTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGV4YW1wbGUuY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
