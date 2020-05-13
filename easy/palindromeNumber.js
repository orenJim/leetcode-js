// 9. Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} number
 * @return {boolean}
 */

const palindromeNumber = (number) => {
  // check if number is a negative
  if (number < 0) return false;
  // turn number into a string first
  const numToString = String(number).split('');
  // save value before reversing
  const numToStringValue = numToString.join('');
  // reverse numToString
  const reverseNumToString = numToString.reverse().join('');
  // check if the two are similar, if so return true, else false
  return numToStringValue === reverseNumToString;
};

// Follow up: Coud you solve it without converting the integer to a string?
