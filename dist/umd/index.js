var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path', 'autobind-decorator', '@nod/base', 'decorate-this', 'source-map-support/register'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'), require('autobind-decorator'), require('@nod/base'), require('decorate-this'), require('source-map-support/register'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.autobindDecorator, global.base, global.decorateThis, global.register);
    global.index = mod.exports;
  }
})(this, function (exports, _path, _autobindDecorator, _base, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Example = undefined;

  var _path2 = _interopRequireDefault(_path);

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Example = exports.Example = function (_Base) {
    _inherits(Example, _Base);

    function Example() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Example);

      var defaults = {
        test: 'default value',
        example: 'default value'
      };
      return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, options, defaults));
    }

    return Example;
  }(_base.Base);

  exports.default = Example;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTWE7OztBQUVYLGFBRlcsT0FFWCxHQUEwQjtVQUFkLGdFQUFVLGtCQUFJOzs0QkFGZixTQUVlOztBQUN4QixVQUFJLFdBQVc7QUFDYixjQUFPLGVBQVA7QUFDQSxpQkFBVSxlQUFWO09BRkUsQ0FEb0I7b0VBRmYsb0JBT0gsU0FBUyxXQUxTO0tBQTFCOztXQUZXOzs7b0JBWUUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICB0ZXN0IDogJ2RlZmF1bHQgdmFsdWUnLFxuICAgICAgZXhhbXBsZSA6ICdkZWZhdWx0IHZhbHVlJ1xuICAgIH07XG4gICAgc3VwZXIob3B0aW9ucywgZGVmYXVsdHMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
