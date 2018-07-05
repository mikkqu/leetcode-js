
let searchInArrayL = (arr, target) => {
    let lo = 0
    let hi = arr.length - 1

    // arr = [4, 5, 6, 7, 0, 1, 2]
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2)
        console.log(lo, mid, hi)

        if (arr[mid] > arr[hi]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    /* lo == hi - index of the smallest value */
    let rot = lo
    lo = 0
    hi = arr.length - 1

    while (lo <= hi) {
        let mid = (lo + hi) / 2
        let realmid = (mid + rot) % arr.length

        if (arr[realmid] == target) { return realmid }
        if (arr[realmid] < target) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return -1
}

let searchInArrayInf = (arr, n) => {
    let lo = 0
    let hi = arr.length - 1

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2)

        let num

        if ((arr[mid] < arr[0]) == (target < arr[0])) {
            num = arr[mid]
        } else {
            if (target < arr[0]) {
                num = -Infinity
            } else {
                num = +Infinity
            }
        }

        console.log(mid, arr, target, num)

        if (num < target)
            lo = mid + 1;
        else if (num > target)
            hi = mid;
        else
            return mid;
    }

    return -1;
}

/*
    Pivot search
 */
let findPivotPoint = (arr) => {
    let begin = 0
    let end = arr.length - 1

    while (begin < end) {
        let mid = Math.floor((end + begin) / 2)
        console.log(begin, mid, end, arr)

        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        } else if (arr[mid] > arr[0]) {
            begin = mid + 1
        } else {
            end = mid
        }
    }

    return 0
}

let binarySearch = (arr, num, low, high) => {
    console.log(low, high, num, arr)
    if (low > high) {
        return -1
    }

    let mid = Math.floor((low + high) / 2)

    if (num > arr[mid]) {
        return binarySearch(arr, num, mid + 1, high)
    } else if (num < arr[mid]) {
        return binarySearch(arr, num, low, mid - 1)
    } else if (num === arr[mid]) {
        return mid
    }
}

let searchInArray = (arr, target) => {
    let pivot = findPivotPoint(arr)
    console.log('pivot', pivot)

    // if (pivot == 0 || target < arr[0]) {
    //     return binarySearch(arr, target, pivot, arr.length - 1)
    // } else {
    //     return binarySearch(arr, target, 0, pivot)
    // }
}

/*
    Optimal
*/
let search = (arr, key, low, high) => {
    if (low > high) { return -1 }

    let mid = Math.floor((low + high) / 2)

    if (arr[mid] == key) { return mid }

    // If arr[l...mid] is sorted
    if (arr[low] <= arr[mid]) {
        if ((key >= arr[low]) && (key <= arr[mid])) {
            return search(arr, key, low, mid - 1)
        } else {
            return search(arr, key, mid + 1, high)
        }
    } else {
        // If arr[l..mid] isn't sorted, then arr[mid...r] is
        if ((key >= arr[mid]) && (key <= arr[high])) {
            return search(arr, key, mid + 1, high)
        } else {
            return search(arr, key, low, mid - 1)
        }
    }
}

let arr = [1, 2, 3]
let target = 1

console.log(search(arr, target, 0, arr.length - 1))
