
/*
    O(n^3)
*/
let maxSubArrayBruteN3 = (arr) => {
    if (!arr.length) { return null }

    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0

            for (let k = i; k <= j; k++) {
                sum += arr[k]
            }

            max = Math.max(sum, max)
        }
    }

    return max
}

/*
    O(n^2)
*/
let maxSubArrayBruteN2 = (arr) => {
    if (!arr.length) { return null }

    let max = -Infinity

    for (let i = 0; i < arr.length; i++) {
        let curr = 0

        for (let j = i; j < arr.length; j++) {
            curr += arr[j]
            max = Math.max(max, curr)
        }
    }

    return max
}

/*
    Bottom-up DP also known as Kadane's algorithm
*/
let maxSubArrayDp = (arr) => {
    if (!arr.length) { return null }

    let max = arr[0] // max = 0, in empty subsets matter
    let maxEndingHere = arr[0]

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], arr[i] + maxEndingHere)
        max = Math.max(max, maxEndingHere)
    }

    return max
}

/*
    Modifies array
*/
let maxSubArrayDp_RW = (arr) => {
    if (!arr.length) { return null }

    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
        max = Math.max(max, arr[i])
    }

    return max
}

/*
    Recursive version
*/
let maxSubArrayDp_Rec = (arr) => {
    if (!arr.length) { return null }

    let _maxSubArray = (arr, n) => {
        if (n === 0) { return arr[0] }

        return Math.max(
            arr[n],
            _maxSubArray(arr, n - 1) + arr[n]
        )
    }

    let max = _maxSubArray(arr, arr.length - 1)

    return max
}

/*
    Returns range
*/
let maxSubArrayDp_LR = (arr) => {
    if (!arr.length) { return null }

    let max = arr[0]
    let maxEndingHere = arr[0]

    let [ l, r, window ] = [ 0, 0, 0 ]

    for (let i = 1; i < arr.length; i++) {
        /*
            >= vs >
            > - makes the sequence longer
            i.e. [-1, +1, 2]
        */
        if (arr[i] >= maxEndingHere + arr[i]) {
            maxEndingHere = arr[i]
            window = 0
        } else {
            maxEndingHere = arr[i] + maxEndingHere
            window++
        }

        /*
            > vs >=
            >= would rewrite if same sum appear later
            i.e. [+1, +2, -3, +1, +2]
        */
        if (maxEndingHere >= max) {
            max = maxEndingHere
            r = i
            l = i - window
        }
    }

    console.log('LR:', l, r)
    return max
}

/*
    Divide and Conquer: O(N * log(N))
*/
let maxSubArrayDC = (arr) => {
    let _maxCrossingSum = (arr, low, mid, high) => {
        let leftSum = 0
        let leftMax = -Infinity

        for (let i = mid; i >= low; i--) {
            leftSum += arr[i]
            leftMax = Math.max(leftSum, leftMax)
        }

        let rightSum = 0
        let rightMax = -Infinity

        for (let i = mid + 1; i <= high; i++) {
            rightSum += arr[i]
            rightMax = Math.max(rightSum, rightMax)
        }

        return leftMax + rightMax
    }

    let _maxSubArraySum = (arr, low, high) => {
        if (low == high) {
            return arr[low]
        }

        let mid = Math.floor((low + high) / 2)

        /*
            Return maximum out of following:
            - Maximum subarray sum in left half
            - Maximum subarray sum in right half
            - Maximum subarray sum such that the
                subarray crosses the midpoint
        */
        return Math.max(
            _maxSubArraySum(arr, low, mid),
            _maxSubArraySum(arr, mid + 1, high),
            _maxCrossingSum(arr, low, mid, high)
        );
    }

    return _maxSubArraySum(arr, 0, arr.length - 1)
}

let arr = [-1, 1, -1, 1, 2]
console.log(maxSubArrayDp_LR(arr))