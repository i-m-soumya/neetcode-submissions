class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let count = 0
        numsSet.forEach(num => {
            if(!numsSet.has(num - 1)) {
                let n = num
                let currentCount = 1
                while(numsSet.has(n + 1)) {
                    n = n + 1
                    currentCount = currentCount + 1
                }
                count = Math.max(count, currentCount)
            }
        })
        return count
    }
}
