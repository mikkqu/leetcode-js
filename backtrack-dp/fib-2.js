
let fib = (n) => {
    if (n < 0) { return -1 }
    if (n == 0 || n == 1) { return n }

    return fib(n - 1) + fib(n - 2)
}

let fib_td = (n) => {
    if (n < 0) { return -1 }

    let memo = [0, 1]

    let _fib = (n) => {
        if (memo[n] === undefined) {
            memo[n] = _fib(n - 1) + _fib(n - 2)
        }

        return memo[n]
    }

    let res =  _fib(n)

    return res
}

let fib_bu = (n) => {
    if (n < 0) { return -1 }

    let memo = [0, 1]

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n]
}

let fib_bu_const = (n) => {
    if (n < 0) { return -1 }
    if (n == 0 || n == 1) { return n }

    let n1 = 1
    let n2 = 0

    for (let i = 2; i <= n; i++) {
        let n0 = n1 + n2
        n2 = n1
        n1 = n0
    }

    return n1 + n2
}

for (let i = 0; i < 10; i++) {
    console.log(fib_bu_const(i))
}
