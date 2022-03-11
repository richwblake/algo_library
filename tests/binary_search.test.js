const binary_search = require('../scripts/binary_search');

const ex1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ex2 = [1, 2];
const ex3 = [4, 7, 12, 14, 15, 18, 22, 23];
const ex4 = [1, 2, 3];
const ex5 = [];

test('Finds target\'s index in array of size 10', () => {
  expect(binary_search(ex1, 5, 0, ex1.length - 1)).toBe(4);
});

test('Finds target\'s index in array of size 2', () => {
  expect(binary_search(ex2, 2, 0, ex2.length - 1)).toBe(1);
});

test('Finds target\'s index in array of size 8', () => {
  expect(binary_search(ex3, 23, 0, ex3.length - 1)).toBe(7);
});

test('Returns -1 if element cannot be found', () => {
  expect(binary_search(ex4, 4, 0, ex4.length - 1)).toBe(-1);
});

test('Returns -1 for an empty array', () => {
  expect(binary_search(ex5, 3, 0, ex5.length - 1)).toBe(-1);
});