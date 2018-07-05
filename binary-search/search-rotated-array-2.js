
/*
    [4, 5, 6, 7, 0, 1, 2], target = 1

    low, mid, high
    0, 3, 6
*/

let search = (arr, key) => {
    if (arr.length === 0) { return -1 }

    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = (low + high) >>> 1

        console.log('ind:', low, mid, high)
        console.log('arr:', arr[low], arr[mid], arr[high])

        if (arr[mid] === key) { return true }

        while ((arr[low] == arr[mid]) && (arr[high] == arr[mid])) {
            ++low;
            --high;

            console.log('ind after:', low, mid, high)
            console.log('arr after:', arr[low], arr[mid], arr[high])
        }

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

    return false
}

let arr = [1, 1, 2, 1, 1, 1, 1]
let key = 2

let res = search(arr, key)
console.log(res)