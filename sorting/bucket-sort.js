
let countBits = (num) => {
    let count = 0

    while (num) {
        count += (num & 1)
        num = num >> 1
    }

    return count
}

let insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1

        while ((arr[j] < arr[j - 1]) && (j > 0)) {
            let lesser = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = lesser

            j--
        }
    }
}

let bucketSort = (els, n) => {
    let bucketSize = Math.floor(Math.log2(n)) + 1

    let buckets = []
    for (let i = 0; i < bucketSize; i++) {
        buckets[i] = []
    }

    for (let el of els) {
        let bucketIndex = countBits(el)
        buckets[bucketIndex - 1].push(el)
    }

    for (let i = 0; i < bucketSize; i++) {
        insertionSort(buckets[i])
    }

    for (let i = 0; i < bucketSize; i++) {
        if (buckets[i].length === 0) { continue }

        let vals = ''
        for (let j = 0; j < buckets[i].length; j++) {
            vals += buckets[i][j] + ' '
        }

        console.log(vals)
    }
}

let n = 5
let arr = [1, 2, 3, 4, 5]
bucketSort(arr, n)
