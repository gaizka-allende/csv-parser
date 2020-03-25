const parser = require('../parser');
const constants = require('../constants');

jest.mock('fs', () => {
  return {
    readFileSync: (fpath, opts) => {
      if (fpath.includes('doesnotexist')) {
        throw 'unexpected fpath';
      }
      return {
        toString: () => 'Ling,Mai,55900\nJohnson,Jim,56500',
      };
    }
  }
});

describe(
  'parser',
  () => {
    test(
      'error',
      () => {
        const output = parser('doesnotexist.csv');
        expect(output).toEqual(constants.errors.filePathNotFound);
      },
    );
    test(
      'table',
      () => {
        const output = parser('exists.csv');
        expect(output).toEqual(
          `${constants.header}\nLing     Mai       55900\nJohnson  Jim       56500`
        );
      },
    );
  },
);
