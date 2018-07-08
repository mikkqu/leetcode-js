
/*
    O(N * loglog N) + O (N) space
*/
let generatePrimes = (n) => {
    if (n < 3) { return [] }

    let primes = []
    let isPrime = [0, 1]

    for (let i = 2; i < n + 1; i++) {
        isPrime[i] = true
    }

    for (let p = 2; p <= n; p++) {
        if (isPrime[p]) {
            primes.push(p)

            for (let j = p; j <= n; j+= p) {
                isPrime[j] = false
            }
        }
    }

    return primes
}

console.log(generatePrimes(15))