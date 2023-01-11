#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#
# https://leetcode.com/problems/longest-common-prefix/description/
#
# algorithms
# Easy (39.67%)
# Likes:    12095
# Dislikes: 3644
# Total Accepted:    2.1M
# Total Submissions: 5.2M
# Testcase Example:  '["flower","flow","flight"]'
#
# Write a function to find the longest common prefix string amongst an array of
# strings.
# 
# If there is no common prefix, return an empty string "".
# 
# 
# Example 1:
# 
# 
# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# 
# 
# Example 2:
# 
# 
# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# 
# 
# 
# Constraints:
# 
# 
# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lowercase English letters.
# 
# 
#

from typing import List


# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        i = 0
        ret = ''
        while True:
            s = ''
            for j in range(len(strs)):
                if i >= len(strs[j]):
                    return ret
                if s == '':
                    s = strs[j][i]
                elif s != strs[j][i]:
                    return ret
            if j == len(strs) - 1:
                ret += s
                i += 1
            else:
                return ret
                 


    # 两个字符串的公共子串
# @lc code=end

print(Solution().longestCommonPrefix(["flower","flow","floight"]))