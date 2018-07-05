
let threeSum = (arr) => {
    arr.sort((x, y) => x - y)

    let out = []

    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1
        let k = arr.length - 1

        if (arr[i] > 0) { break }

        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]

            if (sum == 0) {
                out.push([arr[i], arr[j], arr[k]])

                j++
                k--
                while (arr[j] == arr[j - 1]) { j++ }
                while (arr[k] == arr[k + 1]) { k-- }
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }

        while (arr[i + 1] == arr[i]) { i++ }
    }

    return out
}


console.log(threeSum([ 1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3 ]))