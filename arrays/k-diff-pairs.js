
/*
    O(N * logN)
*/
let findPairs = (arr, k) => {
    arr.sort((x, y) => x - y)

    let cnt = 0
    let left = 0
    let right = 1

    while (right < arr.length) {
        if (arr[left] + k > arr[right] || right <= left) {
            right++
        } else if (arr[left] + k < arr[right] ||
                left > 0 && arr[left] == arr[left - 1]) {
            left++
        } else {
            cnt++
            left++
        }
    }

    return cnt
}

/*
    O(N) + O(N) mem, only YES/NO
*/
let findPairs2 = (arr, k) => {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]

        if (hash[curr + k] || hash[curr - k]) {
            return 1
        }

        hash[curr] = 1
    }

    return 0
}


let arr = [1, 3, 3, 3, 3]
console.log(findPairs(arr, 2))
console.log(findPairs(arr, 2))