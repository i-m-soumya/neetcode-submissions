class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let charFrequency = new Map()
        for (let i = 0 ; i < s.length ; i++) {
            if(charFrequency.has(s[i])) {
                let count = charFrequency.get(s[i])
                charFrequency.set(s[i], count + 1)
            } else {
                charFrequency.set(s[i], 1)
            }
        }

        for (let i = 0 ; i < t.length ; i++) {
            if(charFrequency.has(t[i])) {
                let count = charFrequency.get(t[i])
                if(count === 1) {
                    charFrequency.delete(t[i])
                } else {
                    charFrequency.set(t[i], count - 1)
                }
            } else {
                return false
            }
        }
        return true
    }
}
