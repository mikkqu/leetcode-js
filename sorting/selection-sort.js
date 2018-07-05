
let swap = (arr, index1, index2) => {
    let tmp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = tmp
}

let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }

        if (min !== i) {
            swap(arr, i, min)
        }
    }

    return arr
}


let arr = [3, 4, 5, 2, 1]
console.log(selectionSort(arr))

