
let twoSum = (arr, target) => {
    if (arr.length < 2) { return -1 }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }

    return -1
}

let twoSumHash = (arr, target) => {
    if (arr.length < 2) { return -1 }

    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        let cmpl = target - arr[i]

        if (hash.hasOwnProperty(cmpl)) {
            return [hash[cmpl], i]
        }

        hash[arr[i]] = i
    }

    return -1
}

let twoSumBs = (arr, target) => {
    if (arr.length < 2) { return -1 }

    let binarySearch = (arr, target) => {
        let low = 0
        let high = arr.length - 1

        while (low <= high) {
            let mid = (low + high) >>> 1

            if (target === arr[mid]) {
                return mid
            }

            if (target < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }

        return -Infinity
    }

    arr = arr.sort((x, y) => x - y)

    for (let i = 0; i < arr.length; i++) {
        let cmpl = target - arr[i]

        let cmplIndex = binarySearch(arr, cmpl)

        if (cmplIndex !== i && cmplIndex !== -Infinity) {
            return [i, cmplIndex]
        }
    }

    return -1
}


let arr = [2, 3, 5, 8, 12, 20]

console.log(twoSumBs(arr, 15))