let maxProfit = (prices) => {
    let hold1 = -Infinity
    let hold2 = -Infinity

    let release1 = 0
    let release2 = 0

    for (let i = 0; i < prices.length; i++) {
        hold1    = Math.max(hold1,    -prices[i]);
        release2 = Math.max(release2, hold2 + prices[i]);     // The maximum if we've just sold 2nd stock so far.
        hold2    = Math.max(hold2,    release1 - prices[i]);  // The maximum if we've just buy  2nd stock so far.
        release1 = Math.max(release1, hold1 + prices[i]);     // The maximum if we've just sold 1nd stock so far.
    }

    return release2
}

console.log(maxProfit([3,3,5,0,0,3,1,4]))