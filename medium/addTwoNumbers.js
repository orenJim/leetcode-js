// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  // pointers for each linked list
  let pointer1 = l1;
  let pointer2 = l2;
  // variable to hold the return linked list
  let returnLL;
  // pointer for the return linked list to add nodes later
  let pointer3 = returnLL;
  let carryover = 0;
  // run until pointers get to end of linked list
  while (pointer1 || pointer2 || carryover > 0) {
    // sum will store the added value between node of each linked list
    let sum = 0;
    // at each node, add to sum and move pointer to next node
    if (pointer1 !== null) {
      sum += pointer1.val;
      pointer1 = pointer1.next;
    }
    if (pointer2 !== null) {
      sum += pointer2.val;
      pointer2 = pointer2.next;
    }
    // add the carry over from last iteration then reset carryover
    sum += carryover;
    carryover = 0;
    // if the sum is greater than 2 digits, add to carry over and change sum to remainder
    if (sum > 9) {
      carryover = Math.floor(sum / 10);
      sum %= 10;
    }
    // initialize return linked list if doesnt exist
    if (returnLL === undefined) {
      returnLL = new ListNode(sum);
      pointer3 = returnLL;
    } else {
      // otherwise, add new node to pointer's next then change pointer to newly created node
      pointer3.next = new ListNode(sum);
      pointer3 = pointer3.next;
    }
  }
  // return new added linked list
  return returnLL;
};
