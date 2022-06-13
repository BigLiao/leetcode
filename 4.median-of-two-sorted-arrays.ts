/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (34.32%)
 * Likes:    17031
 * Dislikes: 2053
 * Total Accepted:    1.4M
 * Total Submissions: 4.1M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 * 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const midIndex = (nums1.length + nums2.length - 1) / 2;
  let i1 = 0, i2 = 0;
  let cur;
    
  while(i1 + i2 < midIndex) {
    if (i1 === nums1.length) {
      cur = nums2[i2];
      i2++;
      continue;
    }
    if (i2 === nums2.length) {
      cur = nums1[i1];
      i1++;
      continue;
    }
    if (nums1[i1] > nums2[i2]) {
      // 取更小的值
      cur = nums2[i2];
      i2++;
    } else {
      cur = nums1[i1];
      i1++;
    }
  }
    let next;
    if (i1 === nums1.length) {
      next = nums2[i2];
    } else if (i2 === nums2.length) {
      next = nums1[i1];
    } else if (nums1[i1] > nums2[i2]) {
      // 取更小的值
      next = nums2[i2];
    } else {
      next = nums1[i1];
    }
  if (i1 + i2 === midIndex) {
    // 奇数情况，取当前的值就行
    return next;
  } else {
    return (cur + next) / 2;
  }
};
// @lc code=end

function findMedianSortedArrays2() {
  // 
}

