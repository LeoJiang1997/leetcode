/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

 class  ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function reverseList(head: ListNode | null): ListNode | null {
   let cur = head;
   let pre = null;
   while(cur){
     const next = cur.next;
     cur.next = pre;
     pre = cur;
     cur = next;
   }

   return pre;
};

// console.log(reverseList({val:1  , next: {val: 2, next: {val: 3, next:null}}}))
// console.log(typeof["a"]);

const p = new Promise((resolve,reject) => {
  resolve("chenggong")
});
p.then();
console.log(p);
// @lc code=end

