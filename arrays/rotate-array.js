let reverseArray = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }
}

let rotateArray = (arr, n) => {
    if (!arr) { return }

    n = n % arr.length
    if (n < 0) {
        n = n + arr.length
    }

    reverseArray(arr, 0, arr.length - 1)
    reverseArray(arr, 0, n - 1)
    reverseArray(arr, n, arr.length - 1)

    return arr
};

let rotateArrayPlain = (arr, n) => {
    if (!arr) { return }

    n = n % arr.length
    if (n < 0) {
        n = n + arr.length
    }

    let tmp = arr.slice(arr.length - n)
    arr = arr.slice(0, arr.length - n)
    arr = tmp.concat(arr)

    return tmp
}

console.log(rotateArrayPlain([1, 2, 3, 4, 5], 2))
/*
    1, 2, 3, 4, 5
    5, 4, 3, 2, 1
    4, 5, 1, 2, 3
*/