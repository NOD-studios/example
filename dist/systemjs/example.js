'use strict';

System.register(['fs', '@nod/base', 'autobind-decorator', 'decorate-this'], function (_export, _context) {
  var fs, Base, autobind, param, returns, optional, _createClass, _desc, _value, _class, Example;

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

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  return {
    setters: [function (_fs) {
      fs = _fs.default;
    }, function (_nodBase) {
      Base = _nodBase.Base;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Example', Example = (_class = function (_Base) {
        _inherits(Example, _Base);

        function Example() {
          _classCallCheck(this, Example);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).apply(this, arguments));
        }

        _createClass(Example, [{
          key: 'readFile',
          value: function readFile(callback) {
            var file = arguments.length <= 1 || arguments[1] === undefined ? './package.json' : arguments[1];
            return fs.readFile(file, function (error, content) {
              if (error) {
                return callback(error);
              }

              callback(error, JSON.parse(content));
            });
          }
        }, {
          key: 'initialize',
          value: function initialize() {
            var _this2 = this;

            var status = this.status;
            this.status = new Promise(function (resolve, reject) {
              try {
                _this2.readFile(function (error, response) {
                  if (error) {
                    return reject(error);
                  }

                  resolve(response);
                });
              } catch (error) {
                reject(error);
              }
            });
            return this;
          }
        }]);

        return Example;
      }(Base), (_applyDecoratedDescriptor(_class.prototype, 'readFile', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'readFile'), _class.prototype)), _class));

      _export('Example', Example);

      _export('default', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUXFCLDZEQUFPIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEJhc2Uge1xuXG4gIEBhdXRvYmluZFxuICByZWFkRmlsZShjYWxsYmFjaywgZmlsZSA9ICcuL3BhY2thZ2UuanNvbicpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGUoZmlsZSwgKGVycm9yLCBjb250ZW50KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBKU09OLnBhcnNlKGNvbnRlbnQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgbGV0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5yZWFkRmlsZSgoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
