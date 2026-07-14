class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupAnagram = new Map()

        for (let i = 0 ; i < strs.length; i++) {
            const str = strs[i]
            const sortedArr = str.split("").sort().join("")
            if(groupAnagram.has(sortedArr)) {
                const anagramArr = groupAnagram.get(sortedArr)
                anagramArr.push(str)
            } else {
                groupAnagram.set(sortedArr, [str])
            }
        }
        return [...groupAnagram.values()]
    }
}

