// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  // memo will keep track of complementary numbers
  const memo = {};
  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - array[i];
    // if the memo object has the complement, return the value and current index
    if (memo.hasOwnProperty(complement)) return [memo[complement], i];
    // else, store in memo the current number and its index
    memo[array[i]] = i;
  }
  // return string if none are found
  return 'None found';
};
