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
     * @return {boolean}
     */
    hasCycle(head) {
        let visited = new Set()
        let currentNode = head
        while(currentNode !== null) {
            if(visited.has(currentNode)) {
                return true
            } else {
                visited.add(currentNode)
            }
            currentNode = currentNode.next
        }
        return false
    }
}
