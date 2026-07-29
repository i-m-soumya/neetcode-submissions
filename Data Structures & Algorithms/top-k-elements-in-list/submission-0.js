class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const bucket = new Array(nums.length + 1).fill(null).map(() =>[])
         const frequency = new Map()
         const result = []
         for(let i = 0; i < nums.length; i++) {
            if(frequency.has(nums[i])) {
                let currentCount = frequency.get(nums[i])
                frequency.set(nums[i], currentCount + 1)
            } else {
                frequency.set(nums[i], 1)
            }
         }

         for (const [num, freq] of frequency) {
            bucket[freq].push(num)
         }

         for (let i = bucket.length - 1; i > 0 ; i--) {
            for(let j = 0 ; j < bucket[i].length ; j++ ) {
                result.push(bucket[i][j])
                console.log(result)
                if(result.length === k) {
                    return result
                }
            }
         }
    }
}
