// 动态规划法 最长递增子序列
function lengthOfLIS(nums) {
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  let dp = Array.from({ length: nums.length }).map(() => 1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let res = 0
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }
  return res
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
let res = lengthOfLIS(nums)
console.log(res)
