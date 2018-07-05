let swap = (A, i, j) => {
    let temp = A[i]
    A[i] = A[j]
    A[j] = temp
}

let firstMissingPositive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        while (
            arr[i] > 0 &&
            arr[i] <= arr.length &&
            arr[i] !== arr[arr[i] - 1]
        ) {
            swap(arr, i, arr[i] - 1)

            console.log(i, arr)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    return arr.length + 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]))