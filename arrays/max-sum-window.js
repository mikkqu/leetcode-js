let maxWindowHeap = (arr, k) => {
    if (arr.length < k) { return null }

    let maxHeap = []
    let maxSum = -Infinity
    let sum = 0

    for (let i = 0; i < k; i++) {
        maxHeap.push(arr[i])
        maxHeap.sort((x, y) => y - x)

        sum += arr[i]
    }

    maxSum = Math.max(sum, maxSum)

    for (let i = k; i < arr.length; i++) {
        let min = maxHeap.shift()
        maxHeap.push(arr[i])
        maxHeap.sort((x, y) => y - x)

        sum -= min
        sum += arr[i]

        maxSum = Math.max(sum, maxSum)

        if (arr[i - k + 1] === maxHeap[0]) {
            maxHeap.shift()
        }
    }

    return maxSum
}

let maxWindowSimple = (arr, k) => {
    if (arr.length < k) { return null }

    let maxSum = -Infinity

    for (let i = 0; i < arr.length - k + 1; i++) {
        let sum = 0

        for (let j = i; j < i + k; j++) {
            sum += arr[j]
        }

        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}

let arr = [1, -1, 4]
console.log(maxWindowSimple(arr, 2))

