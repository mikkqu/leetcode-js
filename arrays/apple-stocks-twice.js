
/*
    O(n) + O(n) space
*/
let maxProfit = (arr) => {
    if (!arr || arr.length < 2) { return }

    let firstBuyProfits = []

    let maxProfit = 0
    let minPrice = arr[0]

    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i])
        maxProfit = Math.max(maxProfit, arr[i] - minPrice)
        firstBuyProfits.push(maxProfit)
    }

    let maxPrice = arr[arr.length - 1]

    for (let i = arr.length - 1; i > 0; i--) {
        maxPrice = Math.max(maxPrice, arr[i])
        maxProfit = Math.max(maxProfit, maxPrice - arr[i] + firstBuyProfits[i - 1])
    }

    return maxProfit
}

let input = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(input))