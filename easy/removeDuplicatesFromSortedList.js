// 83. Remove Duplicates from Sorted List
// Given a sorted linked list, delete all duplicates such that each element appear only once.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const removeDuplicatesFromSortedList = (head) => {
  // check if there is a linkedlist
  if (head === null) return null;
  // pointers
  let currentNode = head;
  let nextNode = currentNode.next;
  // memo to keep track of unique values
  const memo = {
    [currentNode.val]: 1,
  }
  while (nextNode !== null) {
    // if value is unique, store it and move on
    if (memo[nextNode.val] === undefined) {
      memo[nextNode.val] = 1;
      currentNode = nextNode;
      nextNode = currentNode.next;
    } else {
      // otherwise, remove the duplicate
      nextNode = nextNode.next;
      currentNode.next = nextNode;
    }
  }
  return head;
};
