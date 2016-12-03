import assert from 'assert';
import glob from 'glob';
import path from 'path';
import fs from 'fs';
import plugin from '../src/index';
import { transformFileSync } from 'babel-core';

const getTestName = testPath => path.basename(testPath).split('-').join(' ');

describe('cherry-picked modular builds', () => {
  glob.sync(path.join(__dirname, 'fixtures/*/')).forEach((testPath) => {
    const testName = getTestName(testPath);
    const actualPath = path.join(testPath, 'actual.js');
    const expectedPath = path.join(testPath, 'expected.js');

    it(`should work with ${testName}`, () => {
      const actual = transformFileSync(actualPath, {
        plugins: [plugin],
      }).code;
      const expected = fs.readFileSync(expectedPath, 'utf8');

      assert.strictEqual(actual.trim(), expected.trim());
    });
  });

  glob.sync(path.join(__dirname, 'error-fixtures/*/')).forEach((testPath) => {
    const testName = getTestName(testPath);
    const actualPath = path.join(testPath, 'actual.js');

    it(`should throw an error with ${testName}`, () => {
      assert.throws(() => transformFileSync(actualPath, {
        plugins: [plugin],
      }));
    });
  });
});
