// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

/**
 * @param {string} string
 * @return {boolean}
 */

const validParentheses = (string) => {
  // return early if length is 0
  if (string.length === 0) return true;
  // fail early if odd number of parens
  if (string.length % 2 !== 0) return false;
  // keep track of opening and closing with push and pop
  // only left sides in stack array
  const stack = [];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') stack.push(')');
    else if (string[i] === '{') stack.push('}');
    else if (string[i] === '[') stack.push(']');
    else if (string[i] !== stack.pop()) return false;
  }
  return stack.length === 0;
};
