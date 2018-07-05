let findMaxSumRec = (arr, i = arr.length - 1) => {
    // if (!arr || !arr.length) { return 0 }

    if (i == 0) { return arr[0] }
    if (i == 1) { return Math.max(arr[0], arr[1]) }

    return Math.max(
        findMaxSumRec(arr, i - 1),
        arr[i] + findMaxSumRec(arr, i - 2)
    )
}

let findMaxSumMemo = (arr) => {
    if (!arr || !arr.length) { return 0 }

    let memo = []

    let _findMaxSum = (arr, i) => {
        if (i == 0) { return arr[0] }
        if (i == 1) { return Math.max(arr[0], arr[1]) }
        if (memo[i]) { return memo[i] }

        memo[i] = Math.max(
            _findMaxSum(arr, i - 1),
            arr[i] + _findMaxSum(arr, i - 2)
        )

        return memo[i]
    }

    return _findMaxSum(arr, arr.length - 1)
}

let findMaxSumBottomUp = (arr) => {
    if (!arr || !arr.length) { return 0 }
    if (arr.length === 1) { return arr[0] }

    let memo = [
        arr[0],
        Math.max(arr[0], arr[1])
    ];

    for (let i = 2; i < arr.length; i++) {
        memo[i] = Math.max(
            memo[i - 1],
            arr[i] + memo[i - 2]
        );
        console.log(i, memo)
    }

    return memo[arr.length - 1];
};

let findMaxSumConst = (arr) => {
    if (!arr || !arr.length) { return 0 }

    let prevOne = 0
    let prevTwo = 0
    let res = 0

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            res = arr[0]
        } else if (i == 1) {
            res = Math.max(arr[0], arr[1])
        } else {
            res = Math.max(prevOne, arr[i] + prevTwo)
        }

        prevTwo = prevOne
        prevOne = res
    }

    return res
}

let arr = [2, 0, 9, 2, 5]
console.log(findMaxSumMemo(arr))