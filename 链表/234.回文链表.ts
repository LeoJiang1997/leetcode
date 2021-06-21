/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//!判断是否是回文数
//?双指针 递归法 栈 快慢指针
//*另外由于链表不支持随机访问，因此如果想要获取数组中间项和倒数第几项等特定元素就需要一些特殊的手段，
//*而这个手段就是快慢指针。比如要找链表中间项就搞两个指针，一个大步走（一次走两步），一个小步走（一次走一步），这样快指针走到头，慢指针刚好在中间。
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function isPalindrome(head: ListNode | null): boolean {
  //*判断特殊情况
  if (head === null || head.next === null) return true;
  //*快慢指针遍历
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //*拆成两段
  let head2 = null;
  //*后半段反转
  while (slow) {
    const temp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = temp;
  }
  //*两段进行对比
  while (head && head2) {
    if (head.val != head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};
// @lc code=end
console.log(isPalindrome(1));
