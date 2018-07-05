let threeSumClosest = (arr, target) => {
    if (arr.length < 3) { return }

    arr.sort((x, y) => x - y)

    let minDiff = Number.MAX_SAFE_INTEGER
    let result = 0

    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]
            if (Math.abs(sum - target) < minDiff) {
                minDiff = Math.abs(sum - target)
                result = sum
            }

            if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            } else {
                break
            }
        }

        while (arr[i + 1] === arr[i]) { i++ }
    }

    return result
};

//console.log(threeSumClosest([1, 2, 3, 4, 5], 20))
console.log(threeSumClosest(
    [-5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5,
     -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6,
     -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10,
    1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9,
    -2, 7, 0, -4, -3, 1, 6, -3], -1
))