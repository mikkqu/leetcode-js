
let swap = (arr, index1, index2) => {
    let tmp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = tmp
}

let bubbleSort_2 = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
}

let bubbleSort = (arr) => {
    let isSorted = false
    let lastUnsorted = arr.length - 1

    while (lastUnsorted) {
        isSorted = true

        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
                isSorted = false
            }
        }

        lastUnsorted--
    }

    return arr
}

let els = [3, 4, 5, 2, 1]
console.log(bubbleSort(els))
