// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

/**
 * @param {string} s
 * @return {boolean}
 */

const validParentheses = (string) => {
  // return early if length is 0
  if (string.length === 0) return true;
  // fail early if length is 1
  if (string.length === 1) return false;
  // keep track of opening and closing with push and pop
  // only left sides in track array
  const track = [];
  for (let i = 0; i < string.length; i += 1) {
    const lastTrack = track.length - 1;
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') track.push(string[i]);
    if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if (string[i] === ')' && track[lastTrack] === '(') track.pop();
      else if (string[i] === '}' && track[lastTrack] === '{') track.pop();
      else if (string[i] === ']' && track[lastTrack] === '[') track.pop();
      else return false;
    }
  }
  return track.length === 0;
};
