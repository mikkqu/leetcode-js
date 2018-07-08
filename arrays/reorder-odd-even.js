
let reorder = (arr) => {
    if (!arr || !arr.length) { return -1 }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++
        } else {
            swap(arr, left, right)
            right--
        }
    }

    return arr
}



console.log(reorder([1, 1, 2, 4, 6, 8, 3, 5, 2]))