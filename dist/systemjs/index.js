'use strict';

System.register(['source-map-support/register', 'babel-polyfill', './example'], function (_export, _context) {
  var Example, example;
  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_example) {
      Example = _example.Example;
    }],
    execute: function () {
      _export('example', example = new Example());

      _export('example', example);

      example.status.then(function (packageContent) {
        example.console.log({
          packageContent: packageContent
        });
      }).catch(function (error) {
        example.console.error(error);
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
