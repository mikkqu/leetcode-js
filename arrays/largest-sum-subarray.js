
let findLargestSum = (arr) => {
    let currMax = arr[0]
    let globalMax = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (currMax < 0) {
            currMax = arr[i]
        } else {
            currMax = currMax + arr[i]
        }

        if (globalMax < currMax) {
            globalMax = currMax
        }
    }

    return globalMax
}

let arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1]

console.log(findLargestSum(arr))