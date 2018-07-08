
/*
    O(N) + O(1) space, uses sign bit
*/
let applyPerm = (arr, perm) => {
    if (!arr || !perm || arr.length !== perm.length) { return -1 }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    for (let i = 0; i < arr.length; i++) {
        let next = i

        while (perm[next] >= 0) {
            swap(arr, i, perm[next])

            let tmp = perm[next]
            perm[next] = perm[next] - perm.length
            next = tmp
        }
    }

    for (let i = 0; i < perm.length; i++) {
        perm[i] = perm[i] + perm.length
    }

    return arr
}


console.log(applyPerm([1, 2, 3, 4], [3, 1, 2, 0]))


