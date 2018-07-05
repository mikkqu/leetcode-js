
let findMinSubSize = (arr, s) => {
    if (arr.length === 0) { return 0 }

    let minSize = 0
    let sum = 0

    let slow = 0
    let fast = 0

    while (fast <= arr.length) {
        console.log(slow, fast)
        if (sum >= s) {
            if (minSize === 0) { minSize = fast - slow }
            minSize = Math.min(minSize, fast - slow)
            sum -= arr[slow]
            slow++
        } else if (sum < s) {
            sum += arr[fast]
            fast++
        }
    }

    return minSize
}


let arr = [2, 3, 1, 2, 4, 3]
console.log(findMinSubSize(arr, 7))