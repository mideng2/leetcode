// 动态规划法 最长递增子序列
function lengthOfLIS(nums) {
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  let dp = Array.from({ length: nums.length }, () => 1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

const nums = [1, 10, 9, 2, 5, 3, 7, 18]
let res = lengthOfLIS(nums)
console.log(res)

// 二分法
function lengthOfLISBin(arr) {
  let tails = Array.from({ length: arr.length })
  let size = 0

  arr.forEach((x, idx) => { // 遍历arr
    let i = 0
    let j = size
    console.log(`====第${idx}轮====i:${i} j:${j} size:${size}`)
    while (i != j) {
      m = Math.floor((i + j) / 2) // 为什么要这么找m？i j在两边，往中间找，找
      console.log(`m:${m} tails[m]:${tails[m]} x:${x} `)
      if (tails[m] < x) {
        i = m + 1
      } else {
        j = m
      } // 如果tails[m] === x 呢？默认是数字都不一样？
    }
    // i j 相等的时候
    tails[i] = x
    size = Math.max(i+1, size)
    console.log(`tails:${tails} size:${size}`)
  })
  return size
}

// const nums = [1, 10, 9, 2, 5, 3, 7, 18]
const nums = [3, 4, 7, 2, 2, 5]
// 遍历一遍就能找到正确的tails， i和j的区间一直是在tails现有的位数之间，
let res = lengthOfLISBin(nums)
console.log(res)

