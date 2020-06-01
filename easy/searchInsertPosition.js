// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsertPosition = (nums, numToInsert) => {
  function binarySearchAndInsert(array, target, start, end) {
    // base condition, return index to right, which is now start
    if (start > end) return start;
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    // search left
    if (array[mid] > target) return binarySearchAndInsert(array, target, start, mid - 1);
    // search right
    return binarySearchAndInsert(array, target, mid + 1, end);
  }
  // run it
  return binarySearchAndInsert(nums, numToInsert, 0, nums.length - 1);
};
