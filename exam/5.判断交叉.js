

function isFork(arr) {
  let obj = { '0_0': true }
  let x = 0, y = 0
  let list = [[x, y]]
  for (let idx = 0; idx < arr.length; idx++) {
    let item = arr[idx]
    let direct = idx % 4
    // 向上
    if (direct === 0) {
      for (let i = y + 1; i <= y + item; i++) {
        if (obj[`${x}_${i}`]) {
          console.log(`${x}_${i}`)
          return true
        } else {
          obj[`${x}_${i}`] = true
        }
      }
      y = y + item
    } else if (direct === 1) { // 向右
      for (let i = x + 1; i <= x + item; i++) {
        if (obj[`${i}_${y}`]) {
          console.log(`${i}_${y}`)
          return true
        } else {
          obj[`${i}_${y}`] = true
        }
      }
      x = x + item
    } else if (direct === 2) { // 向下
      for (let i = y - item; i < y; i++) {
        if (obj[`${x}_${i}`]) {
          console.log(`${x}_${i}`)
          return true
        } else {
          obj[`${x}_${i}`] = true
        }
      }
      y = y - item
    } else { // 向下
      for (let i = x - item; i < x; i++) {
        if (obj[`${i}_${y}`]) {
          console.log(`${i}_${y}`)
          return true
        } else {
          obj[`${i}_${y}`] = true
        }
      }
      x = x - item
     
    }
    list.push([x, y])
  }
  return false
}
let arr = [4000000, 2000000, 2000000, 4000000, 3000000]

console.log(isFork(arr))