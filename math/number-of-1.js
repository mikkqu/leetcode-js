let hammingWeight = (n) => {
    return n.toString(2).split("0").join("").length
}

let countOne = (n) => {
    let count = 0

    while (n) {
        console.log(toBinary(n))
        n = n & (n - 1)
        count++
    }

    return count
}

console.log(countOne(13))