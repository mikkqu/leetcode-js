
let toBinary = (a) => Number(a).toString(2)

let isPowerOfFour = (n) => {
    // !(n & (n - 1)) - true if num of '1' bits < 2
    return Boolean(!(n & (n - 1)) && (n & 0x55555555))
}

console.log(0, toBinary(0), isPowerOfFour(0))
console.log(1, toBinary(1), isPowerOfFour(1))
console.log(2, toBinary(2), isPowerOfFour(2))
console.log(3, toBinary(3), isPowerOfFour(3))
console.log(4, toBinary(4), isPowerOfFour(4))
console.log(10, toBinary(10), isPowerOfFour(10))
console.log(16, toBinary(16), isPowerOfFour(16))
console.log(32, toBinary(32), isPowerOfFour(32))
console.log(64, toBinary(64), isPowerOfFour(64))
console.log(65, toBinary(65), isPowerOfFour(65))