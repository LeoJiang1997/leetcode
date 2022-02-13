/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 1涉及头结点变化使用虚拟节点
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

    // 2找到要插入的位置
    let pre = dummy_node;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    //  3将子链表内元素顺序一个个进行交换
    let cur = pre.next;
    for (let i = left; i < right; i++) {
        //1 记录当前节点的下一节点以防丢失
         const next = cur.next;
        //2 把 cur 的下一个节点指向 next 的下一个节点；
        cur.next = next.next;
        //3 把 next 的下一个节点指向 pre 的下一个节点；
        next.next = pre.next;
        //4 把 pre 的下一个节点指向 next。
        pre.next = next;
     }
     return dummy_node.next;
};
