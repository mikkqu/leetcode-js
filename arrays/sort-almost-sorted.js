let swap = (arr, i, j) => {
    let tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
}

let sortAlmostSorted = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) {
            let j = i - 1

            while (j >= 0 && arr[i] < arr[j]) {
                j--
            }

            swap(arr, i, j + 1)
            break
        }
    }

    return arr
}

let arr = [10, 20, 60, 40, 50, 30, 70, 80]
console.log(sortAlmostSorted(arr))