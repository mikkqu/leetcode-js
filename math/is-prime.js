let isPrime = (n) => {
    if (n < 2) { return false }

    for (let i = 2; i < Math.ceil(n / 2); i++) {
        if (n % i == 0) {
            return false
        }
    }

    return true
}

let primesum = (A) => {
    for (let i = 2; i <= A; i++) {
        if (isPrime(i) && isPrime(A - i)) {
            return [i, A - i]
        }
    }
}

console.log(primesum(8))


