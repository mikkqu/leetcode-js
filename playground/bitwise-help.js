
let a = 0b1101
let b = 0b1010
let c = 0b1000

let toBinary = (a) => Number(a).toString(2)

console.log('a:', toBinary(a))
console.log('b:', toBinary(b))
console.log('c:', toBinary(c))
console.log('---')

console.log('a | b:', toBinary(a | b))
console.log('a & b:', toBinary(a & b))
console.log('a & ~b:', toBinary(a & ~b))
console.log('~a:', toBinary(~a))
console.log('---')

console.log('a |= 1 << bit:', toBinary(a | 1 << 1))
console.log('a &= ~(1 << bit):', toBinary(a & ~(1 << 0)))
console.log('a & 1 << bit:', toBinary(a & 1 << 0))
console.log('---')

// Extract bits up until first LSB '1'
console.log('c & ~(c - 1):', toBinary(c & ~(c - 1)))
console.log('c & -c:', toBinary(c & -c))
console.log('c ^ (c & (c - 1)):', toBinary(c ^ (c & (c - 1))))
// Position of the first LSB '1'
console.log('log(a & ~(a - 1)):', Math.log2(a & ~(a - 1)))
console.log('---')

console.log('a & (a - 1):', toBinary(a & (a - 1)))
console.log('~0:', toBinary(-1))
console.log('---')

