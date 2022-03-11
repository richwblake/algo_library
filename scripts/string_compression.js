// Write your code inside the function below
// Run the test for this file with the command: npm run string_compression

/*
  String compression algorithms allow us to take long strings of text and shorten them
  by representing them in a different way. For example, our compression algorithm should
  take the following string:
    'aaaabbbccccdddee' (16 characters)
  and return the following string:
    '4a3b4c3d2e' (10 characters)

  another example input:
    'f    de ff' (10 characters)
  should return the following string:
    '1f4 1d1e1 2f' (12 characters, the compression is bigger than the original!)
   
  If the compressed string is longer than the original string, return null
  If the string is empty, return null

  This is a pretty ineffiecient algorithm (consider which types of values this algorithm is particularly bad for), but the concept is in the heart of any widely used
  compression algorithm. Compression allows us to use less data, which is always a huge plus!
  
  @param {String} str - The original string we want to compress
  @return {String} The compressed string

*/

const string_compression = (str) => {

};

module.exports = string_compression;