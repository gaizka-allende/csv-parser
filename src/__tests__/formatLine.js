const formatLine = require('../formatLine');

describe(
  'formatLines',
  () => {
    test(
      'format line',
      () => {
        const formattedLine = formatLine('Ling,Mai,55900');
        expect(
          formattedLine
        ).toEqual(
          'Ling     Mai       55900',
        );
      },
    );
  },
);
