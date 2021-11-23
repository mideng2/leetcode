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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487126&idx=1&sn=4de13e66397bc35970963c5a1330ce18&scene=21#wechat_redirect

function flatten(root) {
  if (root == null) {
    return
  }
  flatten(root.left)
  flatten(root.right)
  // 后序遍历
  // 1、左右子树已经被拉平成一条链表
  let left = root.left
  let right = root.right

  // 2、将左子树作为右子树
  root.left = null
  root.right = left

  // 3、将原先的右子树接到当前右子树的末端
  let p = root
  while (p.right != null) {
    p = p.right
  }
  p.right = right
}
// 另外注意递归框架是后序遍历，因为我们要先拉平左右子树才能进行后续操作。
