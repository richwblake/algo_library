// Write your code inside the function below
// Run the test for this file with the command: npm run string_compression

/*
  Implement the binary search algorithm below. This is a divide and conquer algorithm. This means that we break the big array 
  into smaller arrays, and apply the same search on the smaller array. We continue to split the main array into subarrays until:
    A: We find the target element
    B: the subarrays are of size 1
    C: The target is not found in the array

  The above is not intended to be a comprehensive explanation of this algorithm. This problem will be a lot easier 
  if you have looked into (and understand) the topics binary search algorithm, recursion, and iteration. 
  Take a look at the end of this doc for resources that discuss each of the mentioned topics.

  You can implement this algorithm using recursion (a function will call itself) or regular iteration (for/while loop).

  After passing the tests, take a moment to consider your solution's order of time complexity. 
  If this concept is unfamiliar, resources will be available at the bottom of the doc that explain order of complexity.

  If you choose to go the recusive route, feel free to implement a recursive helper function that is called within binary_search.
  Just ensure that you return the value retured from the helper function inside binary_search.

  ---- Resources ----
  Recursive explanation: https://www.youtube.com/watch?v=uEUXGcc2VXM&t=1s
  Iterative explanation: https://www.youtube.com/watch?v=C2apEw9pgtw
  
  What the hell is recursion?: https://www.youtube.com/watch?v=IJDJ0kBx2LM

  ---- JSDOC ----

  @param {Array} source - The sorted array that you will use to search
  @param {Number} target - The integer number to find in the source array
  @param {Number} l - The left pointer used to point to the left part of the current subarray
  @param {Number} r - The right pointer used to point to the right part of the current subarray
  @return {Number} The index of the target element in the source array. Return -1 if element is not present in source array.
*/

const binary_search = (source, target, l, r) => {

};

module.exports = binary_search;