/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (40.26%)
 * Likes:    11483
 * Dislikes: 309
 * Total Accepted:    1.2M
 * Total Submissions: 2.9M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in non-decreasing order, find the
 * starting and ending position of a given target value.
 * 
 * If target is not found in the array, return [-1, -1].
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid;
      while (left > 0 && nums[left - 1] === target) {
        --left;
      }
      right = mid;
      while (right + 1 < nums.length && nums[right + 1] === target) {
        ++right;
      }
      return [left, right];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};
// @lc code=end

