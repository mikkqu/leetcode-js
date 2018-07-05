
let a = 0b1101
let b = 0b1010

let toBinary = (a) => Number(a).toString(2)

console.log('a:', toBinary(a))
console.log('b:', toBinary(b))
console.log('---')

console.log('a | b:', toBinary(a | b))
console.log('a & b:', toBinary(a & b))
console.log('a & ~b:', toBinary(a & ~b))
console.log('~a:', toBinary(~a))
console.log('---')

console.log('a |= 1 << bit:', toBinary(a | 1 << 1))
console.log('a &= ~(1 << bit):', toBinary(a & ~(1 << 0)))
console.log('---')

console.log('a & 1 << bit:', toBinary(a & 1 << 0))
console.log('a & ~(a - 1):', toBinary(a & ~(a - 1)))
console.log('---')

console.log('a & (a - 1):', toBinary(a & (a - 1)))
console.log('~0:', toBinary(-1))
console.log('---')

