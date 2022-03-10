/**
 * 按照顺序同时发起10个请求，每个请求耗时不一致，如何将这10个请求按照顺序，尽快打印出来
 */

function delay(s) {
  return new Promise(resolve => {
    setTimeout(resolve, s * 1000)
  })
}

function getReqPromiseList() {
  let list = [1, 0.5, 0.5, 1.5, 0.5, 1, 2, 0.5, 3, 1]
  return list.map(item => {
    let pItem = delay(item)
    return { pItem, item }
  })
}

function sortLog() {
  let list = getReqPromiseList()
  let start = new Date().getTime()
  list.reduce((acc, cur) => {
    return acc.then(() => {
      return cur.pItem.then(() => {
        console.log('---', `打印时间：${new Date().getTime() - start}`, `请求时间：${cur.item}`)
      })
    })
  }, Promise.resolve())
}

sortLog()
