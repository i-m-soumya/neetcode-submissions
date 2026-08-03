class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [0]
        const result = new Array(temperatures.length).fill(0);
        for (let i = 1 ; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)] ) {
                const last = stack.pop()
                result[last] = i - last
            }
            stack.push(i)
        }
        return result
    }
}
