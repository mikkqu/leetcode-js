
let maxNonnegativeSubarr = (A) => {
    let maxSum = 0
    let maxSubarr = []

    let currSum = 0
    let currSubarr = []

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            currSum += A[i]
            currSubarr.push(A[i])

            console.log(i, currSubarr, maxSubarr)

            if (currSum == maxSum) {
                if (currSubarr.length > maxSubarr.length) {
                    maxSum = currSum
                    maxSubarr = Array.from(currSubarr)
                }
            } else if (currSum > maxSum) {
                maxSum = currSum
                maxSubarr = Array.from(currSubarr)
            }
        } else {
            currSum = 0
            currSubarr = []
        }
    }

    return maxSubarr
}

console.log(maxNonnegativeSubarr([0, 0, -1, 0]))