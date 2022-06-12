/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.40%)
 * Likes:    25227
 * Dislikes: 1095
 * Total Accepted:    3.4M
 * Total Submissions: 10.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) {
    return s.length;
  }
  let leftIndex = 0;
  let rightIndex = 1;
  let max = 1;
  while (rightIndex < s.length) {
    // 判断下一个是否重复
    let i = leftIndex;
    for (; i < rightIndex; i++) {
      if (s[i] === s[rightIndex]) {
        // 找到了重复的
        leftIndex = i + 1;
      }
    }
    if (i === rightIndex) {
      // 没有重复的
      if (rightIndex - leftIndex + 1 > max) {
        max = rightIndex - leftIndex + 1;
      }
    }
    rightIndex += 1;
  }
  return max;
};
// @lc code=end

