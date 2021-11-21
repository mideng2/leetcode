/**
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 */

/**
 * 思路
 * 每一行放一个皇后，我们需要给每一行安排在合适的列上
 */

let res = []
var solveNQueens = function (n) {

  // 创建一个二维数组
  const chs = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'))
  backtrack(chs, 0, n)
  return res
};

function backtrack(chs, row, n) {
  console.log(chs, row, n)
  if (row === n) { // row + 1数组长度
    res.push(JSON.parse(JSON.stringify(chs)))
    return
  }
  for (let col = 0; col < chs.length; col++) {
    if (isValid(chs, row, col)) {
      chs[row][col] = 'Q'
      backtrack(chs, row + 1, n)
      chs[row][col] = '.'
    }
  }
}

function isValid(chs, row, col) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < chs.length; j++) {
      if (chs[i][j] === 'Q' && (j === col || Math.abs(row - i) === Math.abs(col - j))) {
        return false
      }
    }
  }
  return true
}

console.log('结果', solveNQueens(4))