let maxWindow = (arr, k) => {
    let maxes = []
    let q = []

    for (let i = 0; i < k; i++) {
        while (q.length && q[q.length - 1] < arr[i]) {
            q.pop()
        }

        q.push(arr[i])
    }

    maxes.push(q[0])

    for (let i = k; i < arr.length; i++) {
        while (q.length && q[q.length - 1] < arr[i]) {
            q.pop()
        }

        q.push(arr[i])

        maxes.push(q[0])

        if (arr[i - k + 1] === q[0]) {
            q.shift()
        }
    }

    return maxes
}

let maxWindowHeap = (arr, k) => {
    if (arr.length < k) { return null }

    let maxHeap = []
    let maxes = []

    for (let i = 0; i < k; i++) {
        maxHeap.push(arr[i])
        maxHeap.sort((x, y) => y - x)
    }

    maxes.push(maxHeap[0])

    for (let i = k; i < arr.length; i++) {
        maxHeap.pop()
        maxHeap.push(arr[i])
        maxHeap.sort((x, y) => y - x)

        maxes.push(maxHeap[0])

        if (arr[i - k + 1] === maxHeap[0]) {
            maxHeap.shift()
        }
    }

    return maxes
}

let maxWindowSimple = (arr, k) => {
    if (arr.length < k) { return null }

    let maxes = []

    for (let i = 0; i < arr.length - k + 1; i++) {
        let max = -Infinity

        for (let j = i; j < i + k; j++) {
            if (arr[j] > max) {
                max = arr[j]
            }
        }

        maxes.push(max)
    }

    return maxes
}

let arr = [-4, 2, -5, 1, -1, 6]

console.log(maxWindowHeap(arr, 3))

