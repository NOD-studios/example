'use strict';

System.register(['source-map-support/register', 'babel-polyfill', 'path', 'autobind-decorator', '@nod/base', 'decorate-this'], function (_export, _context) {
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
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_path) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FTYyxnRUFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmV4cG9ydCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgdGVzdCA6ICdkZWZhdWx0IHZhbHVlJyxcbiAgICAgIGV4YW1wbGUgOiAnZGVmYXVsdCB2YWx1ZSdcbiAgICB9O1xuICAgIHN1cGVyKG9wdGlvbnMsIGRlZmF1bHRzKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
