
/*
    O(num of '1's)
*/
let countBitsFast = (p) => {
    let n = 0

    while (p > 0) {
        p &= p - 1
        n++
    }

    return n
}

/*
    O(n)
*/
let countBits = (p) => {
    const bitsPerInt = 32
    let n = 0

    for (let i = 0; i < bitsPerInt; i++) {
        if (p & (1 << i)) {
            n++
        }
    }

    return n
}

let countBitsBetter = (p) => {
    let n = 0

    while (p != 0) {
        n += (p & 1)
        p >>>= 1
    }

    return n
}

/*
    Precomputed 2^8 numbers for O(1)
*/
let countBitsPre = (p) => {
    let pre = []

    let precompute = () => {
        for (let i = 0; i <= Math.pow(2, 8); i++) {
            pre[i] = countBitsFast(i)
        }
    }

    precompute()

    // console.log('Bin:', p.toString(2))
    // console.log('Bin >> 8:', (p >> 8).toString(2))

    return pre[(p >> 24)] +
            pre[(p >> 16) & 0xFF] +
            pre[(p >> 8) & 0xFF] +
            pre[p & 0xFF]
}

let p = Math.pow(2, 8) + 2

console.log(countBitsFast(p))
console.log(countBits(p))
console.log(countBitsPre(p))