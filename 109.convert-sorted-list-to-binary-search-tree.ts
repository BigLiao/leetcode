/*
 * @lc app=leetcode id=109 lang=typescript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (55.91%)
 * Likes:    4746
 * Dislikes: 116
 * Total Accepted:    381.5K
 * Total Submissions: 680K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given the head of a singly linked list where elements are sorted in
 * ascending order, convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: One possible answer is [0,-3,9,-10,null,5], which represents
 * the shown height balanced BST.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in head is in the range [0, 2 * 10^4].
 * -10^5 <= Node.val <= 10^5
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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }
// }
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

// 找到链的中点
function findMidNode(headNode: ListNode, tailNode: ListNode | null): ListNode {
  let cur: ListNode | null = headNode;
  let len = 0;
  while (cur && cur !== tailNode) {
    cur = cur.next;
    len++;
  }
  let midLen = Math.floor(len / 2);
  let curIndex = 0;
  cur = headNode;
  while (curIndex < midLen && cur) {
    curIndex++;
    cur = cur.next;
  }
  return cur!;
}

function getSubTree(headNode: ListNode | null, tailNode: ListNode | null): TreeNode | null {
  if (headNode === null) return null;
  if (headNode === tailNode) return null;
  const midNode = findMidNode(headNode, tailNode);
  const leftTree = getSubTree(headNode, midNode);
  const rightTree = getSubTree(midNode.next, tailNode);
  return new TreeNode(midNode.val, leftTree, rightTree);
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  return getSubTree(head, null);
};
// @lc code=end

