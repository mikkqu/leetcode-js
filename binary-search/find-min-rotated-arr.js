
let searchAlt = (arr) => {
    if (!arr.length) { return null }

    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = (low + high) >>> 1
        let next = (mid + 1) % arr.length
        let prev = (mid - 1 + arr.length) % arr.length

        // <= for the case of one element: [ 1 ]
        if (arr[low] <= arr[high]) {
            return arr[low]
        }

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return arr[mid]
        }

        if (arr[mid] >= arr[low]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return null
}

let search = (arr) => {
    if (!arr.length) { return null }

    let low = 0
    let high = arr.length - 1

    while (low < high) { // while range is at least 2 elements
        let mid = (low + high) >>> 1 // mid tends toward left

        console.log(low, mid, high)

        if (arr[low] < arr[high]) { // no rotation
            return arr[low]
        }

        if (arr[mid] >= arr[low]) { // rotation is at the right
            low = mid + 1
        } else { // rotation is at the left, or maybe it's mid
            high = mid
        }
    }

    return arr[low]
}

/*
    Version for repeated numbers
*/
let searchDups = (arr) => {
    if (!arr.length) { return null }

    let low = 0
    let high = arr.length - 1

    while (low < high) {
        let mid = (low + high) >>> 1

        console.log(low, mid, high)

        if (arr[mid] > arr[high]) {
            low = mid + 1
        } else if (arr[mid] < arr[high]) {
            high = mid
        } else {
            high--
        }
    }

    return arr[low]
}

let arrA = [2, 1, 2]

console.log(search([1, 3, 5]))

let arrA = [ 1, 2 ] // arr[low] < arr[high]
let arrB = [ 2, 1 ] // arr[mid] >= arr[low]
let arrC = [ 2, 2 ]
let arrD = [ 3, 1, 2 ] // arr[mid] < arr[low]

console.log(search([2, 1]))