// const coins = [1, 2, 5]
// const amount = 11 // 3

// const coins = [2]
// const amount = 3 // -1

// const coins = [1]
// const amount = 0 // 0

// const coins = [1]
// const amount = 1 // 1

// const coins = [1]
// const amount = 2 // 2

const coins = [1, 2, 5]
const amount = 100 // 太大的数会超时


function coinChange(coins, amount) {
  const memo = {}
  function dp(n) {
    // 备忘录
    if (memo[n]) { return memo[n] }

    if (n == 0) return 0
    if (n < 0) return -1
    // 定义初始值
    let res = Infinity

    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i]
      let subProblem = dp(n - coin)

      if (subProblem === -1) continue
      // 取最小值
      res = Math.min(res, 1 + subProblem)
      // console.log(`res:${res}`, `subProblem:${subProblem}`, `n-coin:${n-coin}`)
    }

    // 记录在备忘录中
    memo[n] = res === Infinity ? -1 : res
    return memo[n]
  }

  return dp(amount)
}
// console.time('coin')
// console.log('结果', coinChange(coins, amount))
// console.timeEnd('coin')

// dp table解法 本质上和memo一样，只不过memo是自顶向下，而dptable是自底向上，并且是数组
// 可以把表格画出来帮助思考
function coinChangeDpTable(coins, amount) {
  const dp = Array.from({ length: amount + 1 }, () => Infinity)
  dp[0] = 0 // amount = 0时，需要0枚硬币
  // 遍历所有amount情况 i = 0 ~ amount
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) continue // 这个面值的币超出当前总额
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1) // k种面值遍历，取当前amount减去某一个面值+1的最小值
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]

}
console.time('coindp')
console.log(coinChangeDpTable(coins, amount))
console.timeEnd('coindp')