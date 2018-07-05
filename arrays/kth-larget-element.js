
/*
    O(n * log(n))
*/
let findKthLargest = (nums, k) => {
    nums.sort((x, y) => x - y)

    console.log(nums, nums.length, k)

    return nums[nums.length - k];
}

/*
    O(n * log(k)) + O(K) space
*/
let findKthLargestQueue = (nums, k) => {
    let pq = new PriorityQueue()
    for (let val of nums) {
        pq.offer(val);

        if (pq.size() > k) {
            pq.poll()
        }
    }
    return pq.peek()
}

/*
    O(n) best / O(n^2) + O(1) memory
*/
let findKthLargestSmart = (nums, k) => {
    /* randomize input - shuffle(nums) - for O(n) guaranteed */
    k = nums.length - k
    let lo = 0
    let hi = nums.length - 1

    while (lo < hi) {
        console.log(lo, hi)
        let j = partition(nums, lo, hi)
        if (j < k) {
            lo = j + 1
        } else if (j > k) {
            hi = j - 1
        } else {
            break
        }
    }

    return nums[k]
}

let partition = (a, lo, hi) => {
    let i = lo
    let j = hi + 1

    while (true) {
        console.log(i, hi, a[i], a[lo])
        while ((i < hi) && (a[++i] < a[lo])) {
            i++
        }
        while (j > lo && (a[lo] < a[--j])) {
            j--
        }
        if (i >= j) {
            break
        }
        swap(a, i, j)
    }

    swap(a, lo, j)
    return j
}

let swap = (a, i, j) => {
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}

let less = (v, w) => {
    return v < w
}

let nums = [3, 2, 1, 5, 6, 4]
let k = 2

console.log(findKthLargestSmart(nums, k))