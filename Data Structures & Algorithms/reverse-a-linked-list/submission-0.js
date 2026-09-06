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
     * @return {ListNode}
     */
    reverseList(head) {
        let last = null
        let current = head

        while(current !== null) {
            let next = current.next
            current.next = last
            last = current
            current = next
        }
        return last 
    }
}
