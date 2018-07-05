
let search = (arr, key) => {
    if (arr.length === 0) { return -1 }

    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = (low + high) >>> 1

        console.log('ind:', low, mid, high)
        console.log('arr:', arr[low], arr[mid], arr[high])

        if (arr[mid] === key) { return mid }

        if (arr[low] <= arr[mid]) {
            if ((key >= arr[low]) && (key <= arr[mid])) {
                console.log('A')
                high = mid - 1
            } else {
                console.log('B')
                low = mid + 1
            }
        } else {
            if ((key >= arr[mid]) && (key <= arr[high])) {
                console.log('C')
                low = mid + 1
            } else {
                console.log('D')
                high = mid - 1
            }
        }
    }

    return -1
}


let arr = [4, 5, 6, 7, 8, 0, 1, 2]
let key = 1

console.log(search(arr, key))