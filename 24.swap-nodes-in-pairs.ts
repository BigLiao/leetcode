/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (59.08%)
 * Likes:    7320
 * Dislikes: 304
 * Total Accepted:    902.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = []
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = [1]
 * Output: [1]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let p1: ListNode | null = head;
  let p2: ListNode | null;
  // 先交换head
  p1 = head.next;
  head.next = p1.next;
  p1.next = head;
  head = p1;

  let prev: ListNode | null = p1.next;
  p1 = prev.next;
  while (p1 !== null && p1.next !== null) {
    p2 = p1.next;
    prev.next = p1.next;
    p1.next = p2.next;
    p2.next = p1;
    prev = p1;
    p1 = prev.next
  }

  return head;

};



function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let p1: ListNode | null = head;
  let p2: ListNode | null;
  // 先交换head
  p1 = head.next;
  head.next = p1.next;
  p1.next = head;
  head = p1;

  let prev: ListNode | null = p1.next;
  p1 = prev.next;
  while (p1 !== null && p1.next !== null) {
    p2 = p1.next;
    prev.next = p1.next;
    p1.next = p2.next;
    p2.next = p1;
    prev = p1;
    p1 = prev.next
  }

  return head;

};
// @lc code=end

