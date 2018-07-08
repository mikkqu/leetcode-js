
let reverseBits = (n, length = 32) => {
    let r = 0

    for (let i = 0; i < length; i++) {
        r <<= 1
        r |= n & 0x1
        n >>= 1
    }

    return r
}

/*
    Precomputed reverse is the fastest way
*/
let reverseBitsPre = (p) => {
    let pre = []

    let precompute = () => {
        for (let i = 0; i <= Math.pow(2, 8); i++) {
            pre[i] = reverseBits(i, 8)
        }
    }

    precompute()

    return pre[(p >> 24) & 0xFF] |
            pre[(p >> 16) & 0xFF] << 8 |
            pre[(p >> 8) & 0xFF] << 16 |
            pre[p & 0xFF] << 24
}

let p = Math.pow(2, 16) + 2

console.log('B: ', p.toString(2).padStart(32, 0))
console.log('RB:', reverseBits(p).toString(2).padStart(32, 0))
console.log('RP:', reverseBitsPre(p).toString(2).padStart(32, 0))