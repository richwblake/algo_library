const two_sock = require('../scripts/two_sock');

const drawer1 = ['blue', 'green', 'blue', 'orange'];
const drawer2 = ['orange', 'purple', 'yellow', 'pink', 'pink'];
const drawer3 = ['blue', 'red', 'green'];
const drawer4 = [];

test('Finds pair of socks', () => {
  expect(two_sock(drawer1)).toBe('blue');
});

test('Finds another of socks', () => {
  expect(two_sock(drawer2)).toBe('pink');
});

test('Return null if no pair is present', () => {
  expect(two_sock(drawer3)).toBe(null);
});

test('Returns null if array is empty', () => {
  expect(two_sock(drawer4)).toBe(null);
});