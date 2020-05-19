// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Note: All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strings
 * @return {string}
 */

const longestCommonPrefix = (strings) => {
  // object to hold all possible prefix/substring
  const prefixs = {};
  // loop through all strings
  for (let i = 0; i < strings.length; i += 1) {
    // getting to each string, add all possible substrings to prefixs object
    const string = strings[i];
    for (let j = 0; j < string.length; j += 1) {
      const substring = string.slice(0, j + 1);
      if (prefixs[substring] === undefined) prefixs[substring] = 1;
      else prefixs[substring] += 1;
    }
  }
  // find the largest tallied substring thats larger than 2
  const tallys = Object.entries(prefixs);
  let largestTally = 0;
  let largestSubstring;
  for (let i = 0; i < tallys.length; i += 1) {
    const [substring, tally] = tallys[i];
    if (tally > largestTally) {
      largestTally = tally;
      largestSubstring = substring;
    }
  }
  return largestTally > 1 ? largestSubstring : '';
};
