import path from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from '../src/index';

pluginTester({
  plugin,
  pluginName: 'babel-plugin-date-fns',
  fixtures: path.join(__dirname, 'fixtures'),
});
