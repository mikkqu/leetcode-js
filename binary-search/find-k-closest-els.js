let binarySearch = (arr, x) => {
    if (arr.length === 0 || x < arr[0]) { return -1 }
    if (x > arr[arr.length - 1]) { return arr.length }
    let left = 0, right = arr.length - 1

    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === x) {
            while (arr[mid - 1] === x) { mid-- }
            return mid
        }

        if (arr[mid] < x) {
            if (arr[mid + 1] > x) { return mid }
            left = mid + 1;
        } else {
            if (arr[mid - 1] < x) { return mid }
            right = mid - 1;
        }
    }

    if (arr[left] === x ||
        arr[left] < x && arr[left + 1] >= x
    ) {
        return left
    }

    if (arr[right] === x) {
        return right
    }

    if (arr[right] > x && arr[right - 1] <= x) {
        return right - 1
    }
}

let findClosestElements = (arr, k, x) => {
    let index = binarySearch(arr, x)

    if (index === -1) return arr.slice(0, k)
    if (index === arr.length) return arr.slice(len - k)

    let left = index - Math.ceil((k - 1) / 2)
    let right = index + Math.floor((k - 1) / 2)

    if (left < 0) {
        left = 0
        right = k - 1
    }

    if (right >= arr.length) {
        right = arr.length - 1
        left = arr.length - k
    }

    while (x - arr[left - 1] <= arr[right] - x &&
           left - 1 > -1) {
        left--
        right--
    }

    while (arr[right + 1] - x < x - arr[left] &&
           right + 1 < arr.length) {
        left++
        right++
    }

    return arr.slice(left, right + 1)
};

console.log(findClosestElements([1, 2, 3, 4, 5], 2, 3))