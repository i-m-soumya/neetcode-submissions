class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices.length) {return 0}
        let minValue = prices[0]
        let maxProfit = 0
        for(let i = 1; i < prices.length; i++) {
            let profit = prices[i] - minValue
            maxProfit = Math.max(maxProfit, profit)
            minValue = Math.min(minValue, prices[i])
        }
        return maxProfit
    }
}
