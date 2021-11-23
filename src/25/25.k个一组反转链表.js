/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 递归调用此函数
  // 先找到区间右侧
  let a = (b = head)

  for (let i = 0; i < k; i++) {
    if (b == null) {
      return head
    }
    b = b.next
  }
  let newHead = reverseInterval(a, b)
  // 递归反转后续链表并连接起来
  head.next = reverseKGroup(b, k)
  return newHead
}

/** 反转区间 [a, b) 的元素，注意是左闭右开 */

function reverseInterval(a, b) {
  let pre = null,
    cur = a,
    nxt = a
  while (cur != b) {
    nxt = cur.next // 缓存nxt
    cur.next = pre // 将next指向上一个元素，pre也是为了缓存上一个元素，而不是实际存在该指针

    pre = cur // 下面两句的顺序一定不能错，先把cur缓存，然后才能进行下一步
    cur = nxt
  }
  return pre
}

/**
 * 翻转一整个链表 会改变原链表
 */
function reverse(list) {
  let pre = null,
    cur = list,
    nxt = list
  while (cur != null) {
    nxt = cur.next // 缓存nxt
    cur.next = pre // 将next指向上一个元素，pre也是为了缓存上一个元素，而不是实际存在该指针

    pre = cur // 下面两句的顺序一定不能错，先把cur缓存，然后才能进行下一步
    cur = nxt
  }
  return pre
}

/**
 * 创建一个链表
 */
function createList(arr) {
  let cur = (head = new ListNode(0))

  arr.forEach(item => {
    cur.next = new ListNode(item)
    cur = cur.next
  })

  return head.next
}

const arr = [1, 2, 3, 4, 5]
let list = createList(arr)
console.log('list', JSON.stringify(list))
// let reverseList = reverse(list)
// console.log('reverseList', JSON.stringify(reverseList))
console.log('reverseKGroup', JSON.stringify(reverseKGroup(list, 2)))
