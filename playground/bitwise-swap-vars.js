
let swap = (a, b) => {
    a = a ^ b
    b = a ^ b
    a = a ^ b

    return [a, b]
}

console.log(swap(4, 7))