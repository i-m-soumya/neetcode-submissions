class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operations = new Map ([
            ['+', (a, b) => a + b],
            ['-', (a, b) => a - b],
            ['*', (a, b) => a * b],
            ['/', (a, b) => Math.trunc(a / b)]
        ])

        for(let i = 0; i < tokens.length; i++) {
            if(operations.has(tokens[i])) {
                const rightNum = stack.pop()
                const leftNum = stack.pop()
                stack.push(operations.get(tokens[i])(leftNum, rightNum))
            } else {
                stack.push(Number(tokens[i]))
            }
        }
        return stack.at(-1)
    }
}
