const envelopes = [
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3]
]

// 先第一个元素升序排列，如果第一个元素相同，则按第二个元素降序排列
function sort(a, b) {
  if (a[0] === b[0]) {
    return b[1] - a[1]
  } else {
    return a[0] - b[0]
  }
}
let arr = envelopes.sort(sort)
console.log(arr)

let heightarr = arr.map((item) => {
  return item[1]
})

console.log(heightarr)