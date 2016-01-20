import 'source-map-support/register';
import 'babel-polyfill';
import path from 'path';
import autobind from 'autobind-decorator';
import { Base } from '@nod/base';
import { param, returns, Optional as optional } from 'decorate-this';

export class Example extends Base {

  constructor(options = {}) {
    let defaults = {
      test : 'default value',
      example : 'default value'
    };
    super(options, defaults);
  }

}

export default Example;
