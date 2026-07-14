class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let visitedSet = new Set()
        for (let i = 0 ; i < nums.length; i++) {
            if(visitedSet.has(nums[i])) {
                return true
            }
            visitedSet.add(nums[i])
        }
        return false
    }
}
