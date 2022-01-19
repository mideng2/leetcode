/**
 * 输出
 * [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]

*/

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 2 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 2 }
]

/**
 * 数组构造树，给定了父节点的指向
 * 我感觉自己不会思考了！不能总看书，要自己思考
 */
function arr2tree(arr) {
  let tree = null
  let obj = {}
  // 转换成key为id的对象
  arr.forEach(item => {
    obj[item.id] = item
  })
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (obj[item.pid]) {
      obj[item.pid].children ? obj[item.pid].children.push(obj[item.id]) : (obj[item.pid].children = [obj[item.id]])
    } else {
      tree = obj[item.id]
    }
  }
  return JSON.stringify(tree)
}

let tree = arr2tree(arr)
console.log(tree)
