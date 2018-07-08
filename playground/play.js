
let parity = (x) => {
    console.log(x >>> 16)

    x ^= x >>> 16
    x ^= x >>> 8
    x ^= x >>> 4
    x ^= x >>> 2
    x ^= x >>> 1

    return (x & 1)
}

console.log(parity(3))
// console.log(parity(16))