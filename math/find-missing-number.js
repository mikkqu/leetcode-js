
let findMissing = (input) => {
    let sum = 0

    for (let i in input) {
        sum += input[i]
    }

    let n = input.length + 1
    let sumOfN = Math.floor((n * (n + 1)) / 2)

    return sumOfN - sum
};

let arr = [2, 7, 4, 1, 8, 3, 6, 10, 9]
console.log(findMissing(arr))