class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        const visited = new Set()
        let maxLength = 0
        
        for (let right = 0; right < s.length; right++) {
            while(visited.has(s[right])) {
                visited.delete(s[left])
                left++
            }
            visited.add(s[right])
            maxLength = Math.max(maxLength, visited.size)
        }
        return maxLength
    }
}
