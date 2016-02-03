var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'fs', '@nod/base', 'autobind-decorator', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('fs'), require('@nod/base'), require('autobind-decorator'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fs, global.base, global.autobindDecorator, global.decorateThis);
    global.example = mod.exports;
  }
})(this, function (exports, _fs, _base, _autobindDecorator, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Example = undefined;

  var _fs2 = _interopRequireDefault(_fs);

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

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
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

  var _desc, _value, _class;

  var Example = exports.Example = (_class = function (_Base) {
    _inherits(Example, _Base);

    function Example() {
      _classCallCheck(this, Example);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).apply(this, arguments));
    }

    _createClass(Example, [{
      key: 'readFile',
      value: function readFile(callback) {
        var file = arguments.length <= 1 || arguments[1] === undefined ? './package.json' : arguments[1];

        return _fs2.default.readFile(file, function (error, content) {
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
  }(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'readFile', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'readFile'), _class.prototype)), _class);
  exports.default = Example;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BS2E7Ozs7Ozs7Ozs7OytCQUdGLFVBQW1DO1lBQXpCLDZEQUFPLGdDQUFrQjs7QUFDMUMsZUFBTyxhQUFHLFFBQUgsQ0FBWSxJQUFaLEVBQWtCLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBb0I7QUFDM0MsY0FBSSxLQUFKLEVBQVc7QUFDVCxtQkFBTyxTQUFTLEtBQVQsQ0FBUCxDQURTO1dBQVg7QUFHQSxtQkFBUyxLQUFULEVBQWdCLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBaEIsRUFKMkM7U0FBcEIsQ0FBekIsQ0FEMEM7Ozs7bUNBUy9COzs7QUFDWCxZQUFJLFNBQVMsS0FBSyxNQUFMLENBREY7QUFFWCxhQUFLLE1BQUwsR0FBYyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzdDLGNBQUk7QUFDRixtQkFBSyxRQUFMLENBQWMsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUNqQyxrQkFBSSxLQUFKLEVBQVc7QUFDVCx1QkFBTyxPQUFPLEtBQVAsQ0FBUCxDQURTO2VBQVg7QUFHQSxzQkFBUSxRQUFSLEVBSmlDO2FBQXJCLENBQWQsQ0FERTtXQUFKLENBT0UsT0FBTyxLQUFQLEVBQWM7QUFDZCxtQkFBTyxLQUFQLEVBRGM7V0FBZDtTQVJzQixDQUExQixDQUZXOztBQWVYLGVBQU8sSUFBUCxDQWZXOzs7O1dBWkY7O29CQStCRSIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBCYXNlIHtcblxuICBAYXV0b2JpbmRcbiAgcmVhZEZpbGUoY2FsbGJhY2ssIGZpbGUgPSAnLi9wYWNrYWdlLmpzb24nKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlKGZpbGUsIChlcnJvciwgY29udGVudCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnJvciwgSlNPTi5wYXJzZShjb250ZW50KSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGxldCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICB0aGlzLnN0YXR1cyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVhZEZpbGUoKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
