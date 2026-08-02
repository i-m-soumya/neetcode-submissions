class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);
        const stack = []

        for(let i = 0; i < s.length; i++) {
            if(pairs.has(s[i])) {
                if(stack.at(-1) === pairs.get(s[i])) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(s[i])
            }
        }

        return stack.length > 0 ? false : true
    }
}
