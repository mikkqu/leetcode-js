
/*
    Brute force, O(N ^ 2)
*/
let maxProfitBrute = (arr) => {
    if (!arr || arr.length < 2) { return 0 }

    let maxProfit = 0

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            maxProfit = Math.max(maxProfit, arr[j] - arr[i])
        }
    }

    return maxProfit
}

/*
    Divide and conquer, non-optimized: O(N * log(N)) + O(log(N)) space
*/
let maxProfitDc = (arr) => {
    if (!arr || arr.length < 2) { return 0 }

    let _maxProfitDc = (arr, left, right) => {
        if (right == left) {
            return 0
        }

        let mid = (left + right) >>> 1

        let leftProfit = _maxProfitDc(arr, left, mid)
        let rightProfit = _maxProfitDc(arr, mid + 1, right)

        let minLeft = arr[left]
        for (let i = left; i <= mid; i++) {
            minLeft = Math.min(minLeft, arr[i])
        }

        let maxRight = arr[right]
        for (let i = mid + 1; i <= right; i++) {
            maxRight = Math.max(maxRight, arr[i])
        }

        let crossProfit = maxRight - minLeft

        return Math.max(leftProfit, rightProfit, crossProfit)
    }

    return _maxProfitDc(arr, 0, arr.length - 1)
}

/*
    Divide and conquer, non-optimized - prettier version
*/
let maxProfitDcSplit = (arr) => {
    if (!arr || arr.length < 2) { return 0 }

    let mid = arr.length >>> 1

    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)

    let leftProfit = maxProfitDcSplit(leftArr)
    let rightProfit = maxProfitDcSplit(rightArr)
    let crossProfit = Math.max(...rightArr) - Math.min(...leftArr)

    return Math.max(leftProfit, rightProfit, crossProfit)
}

/*
    Divide and conquer, optimized - O(N) + O(log N) space
*/
let maxProfitDcOpt = (arr) => {
    if (!arr || arr.length < 2) { return 0 }

    let _recurse = (arr, left, right) => {
        if (left == right) {
            return [ 0, arr[left], arr[right] ]
        }

        let mid = left + right >>> 1

        let [ leftProfit, leftMin, leftMax ] = _recurse(arr, left, mid)
        let [ rightProfit, rightMin, rightMax ] = _recurse(arr, mid + 1, right)

        let maxProfit = Math.max(leftProfit, rightProfit, rightMax - leftMin)

        return [ maxProfit, Math.min(leftMin, rightMin), Math.max(leftMax, rightMax) ]
    }

    let [ profit, min, max ] = _recurse(arr, 0, arr.length - 1)

    return profit
}

/*
    DP: O(n) + O(1) space
*/
let maxProfitDp = (arr) => {
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

console.log(maxProfitBrute(input))
console.log(maxProfitDc(input))
console.log(maxProfitDcSplit(input))
console.log(maxProfitDcOpt(input))
console.log(maxProfitDp(input))