
let toBinary = (a) => Number(a).toString(2)

let largestPower = (N) => {
    N = N | (N >> 1)
    N = N | (N >> 2)
    N = N | (N >> 4)
    N = N | (N >> 8)
    N = N | (N >> 16)

    return (N + 1) >> 1
}

console.log(largestPower(65))