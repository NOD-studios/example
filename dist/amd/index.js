var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['exports', 'path', 'autobind-decorator', '@nod/base', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], function (exports, _path, _autobindDecorator, _base, _decorateThis) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BT2E7OztBQUVYLGFBRlcsT0FFWCxHQUEwQjtVQUFkLGdFQUFVLGtCQUFJOzs0QkFGZixTQUVlOztBQUN4QixVQUFJLFdBQVc7QUFDYixjQUFPLGVBQVA7QUFDQSxpQkFBVSxlQUFWO09BRkUsQ0FEb0I7b0VBRmYsb0JBT0gsU0FBUyxXQUxTO0tBQTFCOztXQUZXOzs7b0JBWUUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG5vZC9iYXNlJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIHRlc3QgOiAnZGVmYXVsdCB2YWx1ZScsXG4gICAgICBleGFtcGxlIDogJ2RlZmF1bHQgdmFsdWUnXG4gICAgfTtcbiAgICBzdXBlcihvcHRpb25zLCBkZWZhdWx0cyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
