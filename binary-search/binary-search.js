let binarySearch = (arr, target) => {
    if (!arr || !arr.length) { return -1 }

    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let mid = (low + high) >> 1

        if (target < nums[mid]) {
            high = mid - 1
        } else if (target > nums[mid]) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

let binarySearchRec = (arr, key, min = 0, max = arr.length) => {
    let mid = Math.floor((min + max) / 2)

    if (arr[mid] > key) {
        return binarySearchRec(arr, key, min, mid)
    } else if (arr[mid] < key) {
        return binarySearchRec(arr, key, mid + 1, max)
    } else if (arr[mid] === key) {
        return mid
    } else {
        return null
    }
}

let binarySearchIt = (arr, key, compare_fn) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        var mid = (min + max) >> 1;
        var cmp = compare_fn(key, arr[mid]);

        if (cmp > 0) {
            min = mid + 1;
        } else if (cmp < 0) {
            max = mid - 1;
        } else {
            return mid;
        }
    }

    return -min - 1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearchIt(arr, 0, (x, y) => (x - y)))