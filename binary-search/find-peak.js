
let findPeakElementCorrect = (arr) => {
    let l = 0
    let r = arr.length - 1

    while (l < r) {
        let mid = Math.floor((l + r) / 2)

        console.log(l, mid, r)

        if (arr[mid] > arr[mid + 1]) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return l
}

let findPeakElement = (arr) => {
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        console.log(l, mid, r)

        if (arr[mid] < arr[mid - 1]) {
            r = mid - 1
        } else if (arr[mid] < arr[mid + 1]) {
            l = mid + 1
        } else {
            return mid
        }
    }
}

let arr = [1, 2, 1, 3, 5, 6, 7]
console.log(findPeakElement(arr))
