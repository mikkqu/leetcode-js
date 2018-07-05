
let searchInsert = (A, target) => {
    let low = 0
    let high = A.length - 1

    while (low <= high){
        let mid = Math.floor((low + high) / 2)

        if (A[mid] == target) {
            return mid
        } else if (A[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low
}

console.log(searchInsert([0, 1, 2, 3, 4], 3))