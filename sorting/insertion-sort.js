
let swap = (arr, index1, index2) => {
    let tmp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = tmp
}

let insertionSort_2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > 0 && arr[j] < arr[j - 1]; j--) {
           swap(arr, j, j - 1)
        }
    }
}

let insertionSort = (arr) => {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i

        while (j > 0 && key < arr[j - 1]) {
            arr[j] = arr[j - 1]
            j--
        }

        arr[j] = key
    }
}

let printNewPositions = (arr, unsorted) => {
    let result = []

    for (let i = 0; i < unsorted.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (unsorted[i] === arr[j]) {
                result.push(j + 1)
            }
        }
    }

    console.log(result.join(' '))
}

let arr = [3, 4, 5, 2, 1]
let unsorted = Object.assign([], arr)

insertionSort(arr)
printNewPositions(arr, unsorted)

