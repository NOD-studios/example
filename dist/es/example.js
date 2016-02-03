import fs from 'fs';
import { Base } from '@nod/base';
import autobind from 'autobind-decorator';
import { param, returns, Optional as optional } from 'decorate-this';

export class Example extends Base {

  @autobind
  readFile(callback, file = './package.json') {
    return fs.readFile(file, (error, content) => {
      if (error) {
        return callback(error);
      }
      callback(error, JSON.parse(content));
    });
  }

  initialize() {
    let status = this.status;
    this.status = new Promise((resolve, reject) => {
      try {
        this.readFile((error, response) => {
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
}

export default Example;
