import 'source-map-support/register';
import 'babel-polyfill';
import { Example } from './example';

export let example = new Example({
  test : 'test'
});

example.options.console.log(example.options);
