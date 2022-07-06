/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (60.34%)
 * Likes:    9628
 * Dislikes: 311
 * Total Accepted:    999.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '3\n7'
 *
 * There is a robot on an m x n grid. The robot is initially located at the
 * top-left corner (i.e., grid[0][0]). The robot tries to move to the
 * bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move
 * either down or right at any point in time.
 * 
 * Given the two integers m and n, return the number of possible unique paths
 * that the robot can take to reach the bottom-right corner.
 * 
 * The test cases are generated so that the answer will be less than or equal
 * to 2 * 10^9.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach
 * the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= m, n <= 100
 * 
 * 
 */

// @lc code=start

function factorial(n: number): number {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}

function uniquePaths(m: number, n: number): number {
  // 向右m-1次，向下n-1次，排列一下
  // M1 M2 M3 ...Mm N1 N2 ... Nn
  // A(m+n-2,m+n-2)/A(m-1,m-1)/A(n-1,n-1)
  // return factorial(m - 1 + n - 1) / factorial(m - 1) / factorial(n - 1);
  
  // 节省阶乘。这种写法没有大数越界问题
  let start = Math.max(m - 1, n - 1) + 1;
  let end = m - 1 + n - 1;
  let y = 1;
  let result = 1;
  while (start <= end) {
    result *= start;
    result /= y;
    ++y;
    ++start;
  }
  return result
};
// @lc code=end

