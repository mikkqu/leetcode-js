let sumThree = (arr, key) => {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === key) {
                    return [i, j, k]
                }
            }
        }
    }

    return false
}

let sumThreeBinary = (arr, key) => {
    let binarySearch = (arr, key) => {
        let low = 0
        let high = arr.length - 1

        while (low <= high) {
            let mid = (low + high) >>> 1

            if (key === arr[mid]) {
                return mid
            } else if (key < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }

        return -1
    }

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            let remaining = key - arr[i] - arr[j]

            let k = binarySearch(arr, remaining)
            if (k != -1 && k != i && k != j) {
                return [i, j, k]
            }
        }
    }

    return false
}

let sumThreeSquare = (arr, key) => {
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 2; i++) {
        let remaining = key - arr[i]

        let left = i + 1
        let right = arr.length - 1

        while (left < right) {
            let sum = arr[left] + arr[right]
            if (sum === remaining) {
                return [i, left, right]
            } else if (sum < remaining) {
                left++
            } else {
                right--
            }
        }
    }

    return false
}

let arr = [10, 15, 25, 40, 45]
console.log(sumThreeSquare(arr, 95))