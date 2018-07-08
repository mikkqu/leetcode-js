
/*
    O(N ^ 2)
*/
let rearrange = (arr, pivotIndex) => {
    if (!arr || !arr.length) { return [] }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[pivotIndex]

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < pivot) {
                swap(arr, i, j)
                break;
            }
        }
    }

    for (let i = arr.length - 1; i > 0 && arr[i] >= pivot; i--) {
        for (let j = i - 1; j >= 0 && arr[j] >= pivot; j--) {
            if (arr[j] > pivot) {
                swap(arr, i, j)
                break;
            }
        }
    }

    return arr
}

/*
    O(N)
*/
let rearrangeLinear = (arr, pivotIndex) => {
    if (!arr || !arr.length) { return [] }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[pivotIndex]

    let smaller = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swap(arr, smaller++, i)
        }
    }

    let larger = arr.length - 1
    for (let i = arr.length - 1; i >= 0 && arr[i] >= pivot; i--) {
        if (arr[i] > pivot) {
            swap(arr, larger--, i)
        }
    }

    return arr
}

/*
    O(N), single pass
*/
let rearrangeLinearAlt = (arr, pivotIndex) => {
    if (!arr || !arr.length) { return [] }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[pivotIndex]

    let smaller = 0
    let equal = 0
    let larger = arr.length - 1

    while (equal <= larger) {
        if (arr[equal] < pivot) {
            swap(arr, smaller++, equal++)
        } else if (arr[equal] == pivot) {
            equal++
        } else {
            swap(arr, equal, larger--)
        }
    }

    return arr
}

let arr = [0, 2, 1, 2, 0, 1, 2, 1]
console.log(rearrange(arr, 2))
console.log(rearrangeLinear(arr, 2))
console.log(rearrangeLinearAlt(arr, 2))