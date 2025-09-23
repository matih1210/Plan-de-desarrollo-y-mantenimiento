const sum = require('../src/sum');

test('suma 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
