
let findBestTime = (arr) => {
    if (!arr || arr.length < 2) { return }

    let minPrice = arr[0]
    let maxProfit = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i]
        } else {
            maxProfit = Math.max(arr[i] - minPrice, maxProfit)
        }
    }

    return maxProfit
}

let input = [7, 1, 5, 3, 6, 4]
//let input = [5, 4, 3, 2, 1]

console.log(findBestTime(input))