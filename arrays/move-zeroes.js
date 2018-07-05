let moveZeroes = (nums) => {
    let lastZeroPos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastZeroPos++] = nums[i]
        }
    }

    for (let i = lastZeroPos; i < nums.length; i++) {
        nums[i] = 0
    }
};

let moveZeroesSwap = (arr) => {
    let swap = (arr, a, b) => {
        let tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp
    }

    let lastNonZeroAt = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            swap(arr, lastNonZeroAt, i);
            lastNonZeroAt++
        }
    }

    return arr
};

let arr = [1, 10, 20, 0, 4, 0, 5]
console.log(moveZeroesSwap(arr))