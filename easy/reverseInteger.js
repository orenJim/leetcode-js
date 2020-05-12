// 7. Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.
// Note: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} integer
 * @return {number}
 */

const reverse = (integer) => {
  // limit of 32 bit
  const limit = 2147483648;
  // check if number is negative or not, then store -1 or 1
  const posOrNeg = integer < 0 ? -1 : 1;
  // turn number into a string, then use absolute to get positive, split into an array, reverse it then back to number
  const returnNum = Number(String(Math.abs(integer)).split('').reverse().join(''));
  // return the number based on limit, then change it to positive or negative based off posOrNeg result
  return returnNum > limit ? 0 : returnNum * posOrNeg;
};
