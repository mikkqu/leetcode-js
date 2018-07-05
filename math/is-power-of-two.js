let isPowerOfTwoLog = (n) => {
    return Math.log2(n) % 1 === 0
}

let isPowerOfTwo = (n) => {
    return !(n & (n - 1))
}

let isPowerOfFour = (n) => {
    return !(n & (n - 1)) && (n & 0x55555555)
}

console.log(isPowerOfTwo2(4))