const readLines = require('../readLines');

describe(
  'readlines',
  () => {
    test(
      'get lines',
      () => {
        const lines = readLines('Ling,Mai,55900\nJohnson,Jim,56500');
        expect(lines.length).toEqual(2);
      },
    );
  },
);
