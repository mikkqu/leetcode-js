
let firstMissingNumberMath = (arr) => {
    let sum = 0

    for (let i in arr) {
        sum += arr[i]
    }

    let n = arr.length + 1
    let sumOfN = Math.floor((n * (n + 1)) / 2)

    return sumOfN - sum
}

let arr = [2, 7, 4, 1, 5, 3, 6, 10, 9]

console.log(firstMissingNumberMath(arr))