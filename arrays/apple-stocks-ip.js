
let getMaxProfit = (prices) => {
    if (prices.length < 2) {
        throw new Error('Requires at least 2 values')
    }

    let minPrice = prices[0]
    let maxProfit = prices[1] - prices[0]

    for (let i = 1; i < prices.length; i++) {
        const potentialProfit = prices[i] - minPrice

        maxProfit = Math.max(maxProfit, potentialProfit)
        minPrice = Math.min(minPrice, prices[i])

        console.log(prices[i], minPrice, maxProfit)
    }

    return maxProfit
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]))
