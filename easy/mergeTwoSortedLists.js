// 21. Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoSortedLists = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let returnLinkedList;
  // tracker for l1 and l2
  let trackl1 = l1;
  let trackl2 = l2;
  // set returnLinkedList to new linked listed based on first two links
  if (l1.val <= l2.val) {
    returnLinkedList = new ListNode(l1.val);
    trackl1 = trackl1.next;
  } else {
    returnLinkedList = new ListNode(l2.val);
    trackl2 = trackl2.next;
  }
  // track for returnLinkedList
  let trackl3 = returnLinkedList;
  // while loop to go through the linked lists
  while (trackl1 !== null && trackl2 !== null) {
    if (trackl1.val <= trackl2.val) {
      trackl3.next = new ListNode(trackl1.val);
      trackl3 = trackl3.next;
      trackl1 = trackl1.next;
    } else {
      trackl3.next = new ListNode(trackl2.val);
      trackl3 = trackl3.next;
      trackl2 = trackl2.next;
    }
  }
  // append the rest if while loop finishes even though either linked list has remainders
  if (trackl1 === null) trackl3.next = trackl2;
  if (trackl2 === null) trackl3.next = trackl1;
  return returnLinkedList;
};
