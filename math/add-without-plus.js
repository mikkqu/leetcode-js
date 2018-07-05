let add = (a, b) => {
    while (b != 0) {
        let sum = a ^ b
        let carry = (a & b) << 1

        a = sum
        b = carry
    }

    return a
}

let subtract = (a, b) => {
    while (b != 0) {
        let borrow = (~a) & b

        a = a ^ b
        b = borrow << 1
    }

    return a
}

console.log(add(5, 6))