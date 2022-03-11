const string_compression = require('../scripts/string_compression');

test('Function exists', () => {
  expect(string_compression()).toBe(undefined);
});