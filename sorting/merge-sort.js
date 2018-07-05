
let merge = (left, right, counter) => {
    let sorted = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] <= right[indexRight]) {
            sorted.push(left[indexLeft])
            indexLeft++
        } else {
            sorted.push(right[indexRight])
            indexRight++
            counter.inversions += left.length - indexLeft
        }
    }

    return sorted.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

let mergeSort = (arr, counter) => {
    if (arr.length === 1) { return arr }

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid), counter)
    let right = mergeSort(arr.slice(mid), counter)

    return merge(left, right, counter)
}

let arr = [1, 4, 3, 2, 5]

let counter = { inversions: 0 }
arr = mergeSort(arr, counter)

console.log(arr)
console.log(counter.inversions)