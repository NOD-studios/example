'use strict';

System.register(['source-map-support/register', 'path', 'autobind-decorator', '@nod/base', 'decorate-this'], function (_export, _context) {
  var path, autobind, Base, param, returns, optional, Example;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_path) {
      path = _path.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodBase) {
      Base = _nodBase.Base;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      _export('Example', Example = function (_Base) {
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
      }(Base));

      _export('Example', Example);

      _export('default', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FRYyxnRUFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG5vZC9iYXNlJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIHRlc3QgOiAnZGVmYXVsdCB2YWx1ZScsXG4gICAgICBleGFtcGxlIDogJ2RlZmF1bHQgdmFsdWUnXG4gICAgfTtcbiAgICBzdXBlcihvcHRpb25zLCBkZWZhdWx0cyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
