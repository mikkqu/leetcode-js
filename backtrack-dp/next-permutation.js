
let nextPermutation = (perm) => {
    let k = perm.length - 2

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    while (k >= 0 && perm[k] >= perm[k + 1]) {
        --k
    }

    if (k == -1) {
        return []
    }

    for (let i = perm.length - 1; i > k; i--) {
        if (perm[i] > perm[k]) {
            swap(perm, k, i)
            break
        }
    }

    return perm
}

console.log(nextPermutation([1, 2, 3, 0]))