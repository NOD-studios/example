'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _base = require('@nod/base');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPYTs7O0FBRVgsV0FGVyxPQUVYLEdBQTBCO1FBQWQsZ0VBQVUsa0JBQUk7OzBCQUZmLFNBRWU7O0FBQ3hCLFFBQUksV0FBVztBQUNiLFlBQU8sZUFBUDtBQUNBLGVBQVUsZUFBVjtLQUZFLENBRG9CO2tFQUZmLG9CQU9ILFNBQVMsV0FMUztHQUExQjs7U0FGVzs7O2tCQVlFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICB0ZXN0IDogJ2RlZmF1bHQgdmFsdWUnLFxuICAgICAgZXhhbXBsZSA6ICdkZWZhdWx0IHZhbHVlJ1xuICAgIH07XG4gICAgc3VwZXIob3B0aW9ucywgZGVmYXVsdHMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
