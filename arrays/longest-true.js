
let getMaxLength = (arr) => {
    let result = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++
            result = Math.max(count, result)
        } else {
            count = 0
        }
    }

    return result
}

let arr = [1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1]

console.log(getMaxLength(arr))

