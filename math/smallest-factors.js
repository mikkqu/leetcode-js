
let smallestFactors = (n) => {
    if (n < 10) { return n }

    let list = []

    for (let i = 9; i > 1; i--) {
        while ((n % i) == 0) {
            n = Math.floor(n / i)
            list.unshift(i)
        }
    }

    if (n > 10) { return 0 }

    let result = 0

    for (let i of list) {
        result = result * 10 + i
    }

    return result
}

console.log(smallestFactors(72))