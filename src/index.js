import 'source-map-support/register';
import 'babel-polyfill';
import { Example } from './example';

export let example = new Example();

example.status
  .then((packageContent) => {
    example.console.log({ packageContent });
  })
  .catch((error) => {
    example.console.error(error);
  });
