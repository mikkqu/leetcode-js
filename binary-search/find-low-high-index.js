
let findLowHigh = (arr, key) => {
    let findLow = () => {
        let low = 0
        let high = arr.length - 1

        while (low < high) {
            let mid = (low + high) >>> 1

            if (arr[mid] === key && arr[mid - 1] !== key) {
                return mid
            }

            if (key > arr[mid]) {
                low = mid + 1
            } else {
                high = mid
            }
        }

        return -1
    }

    let findHigh = () => {
        let low = 0
        let high = arr.length - 1

        while (low < high) {
            let mid = ((low + high) >>> 1) + 1

            console.log(low, mid, high)

            if (arr[mid] === key && arr[mid + 1] !== key) {
                return mid
            }

            if (key < arr[mid]) {
                high = mid - 1
            } else {
                low = mid
            }
        }

        return -1
    }

    return [findLow(), findHigh()]
}

let arr = [1, 2, 3, 5, 5, 5, 7, 8, 20]

console.log(findLowHigh(arr, 5))