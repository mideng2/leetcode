/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 二叉树的问题难点在于，如何把题目的要求细化成每个节点需要做的事情
var connect = function (root) {
  if (root == null) {
    return root
  }
  connectTwoNode(root.left, root.right)
  return root
}
// 链接 & 递归
function connectTwoNode(node1, node2) {
  if (node1 == null || node2 == null) {
    return
  }

  node1.next = node2

  connectTwoNode(node1.left, node1.right)
  connectTwoNode(node2.left, node2.right)
  connectTwoNode(node1.right, node2.left)
}

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}


// 以数组形式生成一颗完全二叉树
// https://blog.csdn.net/weixin_42523110/article/details/117780225
const list = [1, 2, 3, 4, 5, 6, 7]
function createList(list) {
  let nodeList = []

  for (let i = 0; i < list.length; i++) {
    nodeList.push(new Node(list[i]))
  }
  for (let i = 0; i < nodeList.length / 2 - 1; i++) {
    nodeList[i].left = nodeList[2 * i + 1]
    nodeList[i].right = nodeList[2 * i + 2]
  }
  // preOrder(nodeList[0])
  return nodeList
}

function preOrder(root) {
  if (root == null) {
    return
  }
  console.log(root)
  preOrder(root.left)
  preOrder(root.right)
}

const root = createList(list)
console.log('root', root)
console.log('结果', connect(root))
