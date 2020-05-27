// 26. Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicatesFromSortedArray = (nums) => {
  // pointer for last unique value
  let unique = 0;
  // pointer for current value of num
  let current = 1;
  while (current < nums.length) {
    if (nums[current] === nums[unique]) {
      nums.splice(current, 1);
    } else {
      unique = current;
      current += 1;
    }
  }
  return nums.length;
};
