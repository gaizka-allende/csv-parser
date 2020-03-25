const formatLines = require('../formatLines');

describe(
  'formatLines',
  () => {
    test(
      'format',
      () => {
        const formatted = formatLines([
          'Ling,Mai,55900',
          'Johnson,Jim,56500',
        ]);
        expect(formatted).toEqual([
          'Ling     Mai       55900',
          'Johnson  Jim       56500',
        ])
      },
    );
  },
);
