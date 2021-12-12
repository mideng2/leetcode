/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) {
    return root // 记得要把root的值返回
  }

  // 先交换当前节点的左右子节点，然后遍历左右子节点
  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)
  return root
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let left = new TreeNode(2, 1, 3)
let right = new TreeNode(7, 6, 9)
let root = new TreeNode(4, left, right)

console.log('root', root)
console.log('结果', invertTree(root))
