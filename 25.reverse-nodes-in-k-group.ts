/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (51.57%)
 * Likes:    7776
 * Dislikes: 509
 * Total Accepted:    540.5K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes, in the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves may
 * be changed.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 * 
 * 
 * 
 * Follow-up: Can you solve the problem in O(1) extra memory space?
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

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head?.next === null) return head;
  const ret = new ListNode(0, head);

  let kHead: ListNode = ret;

  while (kHead.next !== null) {
    // k链指向翻转
    let i = 0;
    let prev: ListNode | null = kHead;
    let cur: ListNode | null = kHead.next;
    let next: ListNode | null = kHead.next;
    while (i < k && cur !== null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      i++;
    }

    if (i < k) {
      // 不足k个，回退？
      while (i >= 0 && prev !== null) {
        next = prev.next;
        prev.next = cur;
        cur = prev;
        prev = next;
        i--;
      }
      break;
    }

    // k链首尾交换
    next = kHead.next;
    kHead.next.next = cur;
    kHead.next = prev;

    // 下一个k链
    kHead = next;
  }

  return ret.next;
};
// @lc code=end

