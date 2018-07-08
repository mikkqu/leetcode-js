
/*
    No duplicates, arr[i] >= 0
    O(N * log N)
*/
let firstMissingNumberSort = (arr) => {
    arr = arr.slice().sort((x, y) => x - y)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }

    return arr.length
}

/*
    Hash: O(n) + O(n) mem
*/
let firstMissingNumberHash = (arr) => {
    let set = new Set()

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        if (!set.has(i)) {
            return i
        }
    }

    return arr.length
}

/*
    In-place: O(n) + O(1) mem
*/
let firstMissingNumberSwap = (arr) => {
    let swap = (arr, i, j) => {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }

    for (let i = 0; i < arr.length; i++) {
        while (
            arr[i] < arr.length &&
            arr[i] !== arr[arr[i]]
        ) {
            swap(arr, arr[i], arr[arr[i]])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }

    return arr.length
}

/*
    In-place: O(n) + O(1) mem
*/
let firstMissingNumberBitwise = (arr) => {
    let ret = 0

    for (let i = 0; i < arr.length; i++) {
        ret ^= i
        ret ^= arr[i]
    }

    return ret ^= arr.length
}


let arr = [0, 2, 7, 4, 1, 5, 3, 6, 10, 9]

console.log(firstMissingNumberSort(arr))
console.log(firstMissingNumberHash(arr))
console.log(firstMissingNumberSwap(arr))
console.log(firstMissingNumberBitwise(arr))