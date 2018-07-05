
let flip = (arr, i) => {
    let start = 0

    while (start < i) {
        let tmp = arr[start]
        arr[start] = arr[i]
        arr[i] = tmp

        start++
        i--
    }
}

let findMax = (arr, n) => {
    let maxIndex = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i
        }
    }

    return maxIndex
}

let pancakeSort = (arr) => {
    let right = arr.length - 1

    while (right > 0) {
        let maxIndex = findMax(arr, right)

        if (maxIndex != right) {
            flip(arr, maxIndex)
            flip(arr, right)
        }

        right--
    }

    return arr
}

let arr = [4, 5, 1, 2, 3]
console.log(pancakeSort(arr))