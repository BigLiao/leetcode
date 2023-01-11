#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#
# https://leetcode.com/problems/reverse-integer/description/
#
# algorithms
# Medium (26.79%)
# Likes:    9380
# Dislikes: 11344
# Total Accepted:    2.4M
# Total Submissions: 8.8M
# Testcase Example:  '123'
#
# Given a signed 32-bit integer x, return x with its digits reversed. If
# reversing x causes the value to go outside the signed 32-bit integer range
# [-2^31, 2^31 - 1], then return 0.
# 
# Assume the environment does not allow you to store 64-bit integers (signed or
# unsigned).
# 
# 
# Example 1:
# 
# 
# Input: x = 123
# Output: 321
# 
# 
# Example 2:
# 
# 
# Input: x = -123
# Output: -321
# 
# 
# Example 3:
# 
# 
# Input: x = 120
# Output: 21
# 
# 
# 
# Constraints:
# 
# 
# -2^31 <= x <= 2^31 - 1
# 
# 
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        s = -1 if x < 0 else 1
        x, y = x * s, 0
        min_int, max_int = (-2)**31, 2**31 - 1
        while(x > 0):
            y = y * 10 + (x % 10) * s
            if (y < min_int or y > max_int): return 0
            x = x // 10
        return y
            

        
# @lc code=end
