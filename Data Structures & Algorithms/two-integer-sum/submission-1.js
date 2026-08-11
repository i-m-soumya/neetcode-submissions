class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complementMap = new Map()
        for(let i = 0; i < nums.length; i++) {
            if(complementMap.has(nums[i])) {
                return [complementMap.get(nums[i]), i]
            } else {
                complementMap.set(target - nums[i], i)
            }
        }
    }
}
