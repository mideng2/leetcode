/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0){
    return null
  }
  // 先序遍历
  let max = Math.max(...nums)
  let idx = nums.indexOf(max)
  let leftNums = nums.slice(0, idx)
  let rightNums = nums.slice(idx + 1)

  let left = constructMaximumBinaryTree(leftNums)
  let right = constructMaximumBinaryTree(rightNums)

  return new TreeNode(max, left, right)
}

const nums = [3, 2, 1, 6, 0, 5]
console.log('constructMaximumBinaryTree', JSON.stringify(constructMaximumBinaryTree(nums)))
// constructMaximumBinaryTree(nums)
