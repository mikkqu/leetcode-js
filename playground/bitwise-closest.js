
let findClosestBitsX = (x) => {
    for (let i = 0; i < 31; i++) {
        if (((x >> i) & 1) ^ ((x >> (i + 1)) & 1)) {
            x ^= (1 << i) | (1 << (i + 1))
            return x
        }
    }

    throw new Error('all bits are 0 or 1')
}

console.log(findClosestBitsX(4))