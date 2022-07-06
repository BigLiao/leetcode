/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (37.97%)
 * Likes:    15421
 * Dislikes: 962
 * Total Accepted:    1.6M
 * Total Submissions: 4.1M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * There is an integer array nums sorted in ascending order (with distinct
 * values).
 * 
 * Prior to being passed to your function, nums is possibly rotated at an
 * unknown pivot index k (1 <= k < nums.length) such that the resulting array
 * is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
 * (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3
 * and become [4,5,6,7,0,1,2].
 * 
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
function search(nums: number[], target: number): number {


  let left = 0;
  let right = nums.length;
  while (right - left > 0) {
    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target === nums[left]) {
      return left;
    }
    if (nums[mid] > nums[left]) {
      // mid点和left点在同侧
      // left->mid->v->right
      if (target > nums[mid]) {
        left = mid;
      } else {
        // 比mid小，先判断 左边
        if (target > nums[left]) {
          right = mid;
        } else {
          left = mid;
        }
      }
    } else {
      // mid点和left在不同侧
      // left->v->mid->right
      if (target > nums[mid]) {
        if (target > nums[left]) {
          right = mid;
        } else {
          left = mid;
        }
      } else {
        right = mid;
      }
    }
  }
  return -1;
};
// @lc code=end

