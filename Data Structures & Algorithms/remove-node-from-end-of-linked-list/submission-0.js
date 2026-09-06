/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head
        let fast = head

        for(let i = 0; i < n; i++) {
            fast = fast.next
        }
        if (fast === null) {
            return head.next
        }

        while(fast !== null && fast.next !== null ) {
            fast = fast.next
            slow = slow.next
        }

        slow.next = slow.next.next
        return head
    }
}
