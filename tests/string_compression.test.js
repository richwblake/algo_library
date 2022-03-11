const string_compression = require('../scripts/string_compression');

const string1 = 'aaabbbbcccceeeeefff';
const string2 = 'anmereeeee';
const string3 = '   fff  er    ';
const string4 = 'ffffffffffffffeeeeeeeeeewwweeeeeeeeefffffffffffdddddddddddddddvvvvvvvvvvvvvvdmggggggggggggkkktttoooooooggggggggllllll';
const string5 = 'jjjjjjjjjjjjjjjjjjeeeeeeeeeeeeeeeeeeiiiiiiiiiffjeeeeeeeeeeeeeeirrrrrrrrrrrrrrrrrrrrrrrrrrriiiiiiiiittttttttttooooooooooooffffiiiiiiiiienckkkkkkkkkkkkkdlsssssssssssssqahhhhhhhhhhhhhhhwuududdbbbbbbbbbbbbbbbbbeeeeeeehdksssssssssssssskdddddddddlllcccccccffffffennnnnnnnnnnddkdkkkkkkkkkkkkkslaaaaaaaaaaaaaaaowdddddddeidddddddddddddoooooo';
const string6 = '';

test('Tests the string \'aaabbbbcccceeeeefff\'', () => {
  expect(string_compression(string1)).toBe('3a4b4c5e3f');
});

test('Tests the string \'   fff  er    \'', () => {
  expect(string_compression(string3)).toBe('3 3f2 1e1r4 ');
});

test('Returns original string if it is shorter than the compressed result', () => {
  expect(string_compression(string2)).toBe('anmereeeee');
});

test('Tests a long string', () => {
  expect(string_compression(string4)).toBe('14f10e3w9e11f15d14v1d1m12g3k3t7o8g6l');
});

test('Tests a really long string', () => {
  expect(string_compression(string5)).toBe('18j18e9i2f1j14e1i27r9i10t12o4f9i1e1n1c13k1d1l13s1q1a15h1w2u1d1u2d17b7e1h1d1k14s1k9d3l7c6f1e11n2d1k1d13k1s1l15a1o1w7d1e1i13d6o');
});

test('Tests an empty string', () => {
  expect(string_compression(string6)).toBe(null);
});