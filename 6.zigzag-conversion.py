#
# @lc app=leetcode id=6 lang=python3
#
# [6] Zigzag Conversion
#
# https://leetcode.com/problems/zigzag-conversion/description/
#
# algorithms
# Medium (41.84%)
# Likes:    4838
# Dislikes: 10400
# Total Accepted:    903.6K
# Total Submissions: 2.1M
# Testcase Example:  '"PAYPALISHIRING"\n3'
#
# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
# of rows like this: (you may want to display this pattern in a fixed font for
# better legibility)
# 
# 
# P   A   H   N
# A P L S I I G
# Y   I   R
# 
# 
# And then read line by line: "PAHNAPLSIIGYIR"
# 
# Write the code that will take a string and make this conversion given a
# number of rows:
# 
# 
# string convert(string s, int numRows);
# 
# 
# 
# Example 1:
# 
# 
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# 
# 
# Example 2:
# 
# 
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I
# 
# 
# Example 3:
# 
# 
# Input: s = "A", numRows = 1
# Output: "A"
# 
# 
# 
# Constraints:
# 
# 
# 1 <= s.length <= 1000
# s consists of English letters (lower-case and upper-case), ',' and '.'.
# 1 <= numRows <= 1000
# 
# 
#

# @lc code=start
import math

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        result = ""
        numGroups = math.ceil(len(s) / (2 * numRows - 2))
        for row in range(numRows):
            for group in range(numGroups):
                groupStart = group * (2 * numRows - 2)
                first = groupStart + row
                if (first >= len(s)):
                    break;
                result += s[first]
                if row > 0 and row < numRows - 1:
                    # 倒数第row个
                    second = groupStart + 2 * numRows - 2 - row
                    if second < len(s):
                        result += s[second]
                # print('result is %s' % result)
        return result;
            
# @lc code=end

a = Solution()
print(a.convert('PAYPALISHIRING', 4))
