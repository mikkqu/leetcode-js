
/*
    No duplicates, arr[i] >= 0
    O(N * log N)
*/
let firstMissingNumberSort = (arr) => {
    arr = arr.sort((x, y) => x - y)

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
let firstMissingNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]

        while (temp < arr.length && arr[temp] !== temp) {
            let t = arr[temp]
            arr[temp] = temp
            temp = t

            console.log(i, arr, temp)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }

    return arr.length
}

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

            console.log(i, arr)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }

    return arr.length
}

//console.log(firstMissingNumberSort([4, 1, 0, 2]))
//console.log(firstMissingNumberHash([4, 1, 0, 2]))
console.log(firstMissingNumberSwap([1, 3, 2, 0]))