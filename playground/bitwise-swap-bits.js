
/*
    Swap bits: MSB -> 31...0 <- LSB
*/
let swapBits = (x, i, j) => {
    if (((x >> i) & 1) !== (x >> j) & 1) {
       x ^= (1 << i) | (1 << j)
    }

    return x
}

let x = Math.pow(2, 5) + 1
console.log(x)
console.log(swapBits(x, 0, 1))