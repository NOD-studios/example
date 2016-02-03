'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _base = require('@nod/base');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2E7Ozs7Ozs7Ozs7OzZCQUdGLFVBQW1DO1VBQXpCLDZEQUFPLGdDQUFrQjs7QUFDMUMsYUFBTyxhQUFHLFFBQUgsQ0FBWSxJQUFaLEVBQWtCLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBb0I7QUFDM0MsWUFBSSxLQUFKLEVBQVc7QUFDVCxpQkFBTyxTQUFTLEtBQVQsQ0FBUCxDQURTO1NBQVg7QUFHQSxpQkFBUyxLQUFULEVBQWdCLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBaEIsRUFKMkM7T0FBcEIsQ0FBekIsQ0FEMEM7Ozs7aUNBUy9COzs7QUFDWCxVQUFJLFNBQVMsS0FBSyxNQUFMLENBREY7QUFFWCxXQUFLLE1BQUwsR0FBYyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzdDLFlBQUk7QUFDRixpQkFBSyxRQUFMLENBQWMsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUNqQyxnQkFBSSxLQUFKLEVBQVc7QUFDVCxxQkFBTyxPQUFPLEtBQVAsQ0FBUCxDQURTO2FBQVg7QUFHQSxvQkFBUSxRQUFSLEVBSmlDO1dBQXJCLENBQWQsQ0FERTtTQUFKLENBT0UsT0FBTyxLQUFQLEVBQWM7QUFDZCxpQkFBTyxLQUFQLEVBRGM7U0FBZDtPQVJzQixDQUExQixDQUZXOztBQWVYLGFBQU8sSUFBUCxDQWZXOzs7O1NBWkY7O2tCQStCRSIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBCYXNlIHtcblxuICBAYXV0b2JpbmRcbiAgcmVhZEZpbGUoY2FsbGJhY2ssIGZpbGUgPSAnLi9wYWNrYWdlLmpzb24nKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlKGZpbGUsIChlcnJvciwgY29udGVudCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnJvciwgSlNPTi5wYXJzZShjb250ZW50KSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGxldCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICB0aGlzLnN0YXR1cyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVhZEZpbGUoKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
