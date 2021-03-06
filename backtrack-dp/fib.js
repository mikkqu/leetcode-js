
/*
    Top-down
*/
let fib = (n) => {
    let memo = [0, 1]

    let _fib = (n) => {
        if (memo[n] === undefined) {
            memo[n] = _fib(n - 1) + _fib(n - 2)
        }

        return memo[n]
    }

    let res =  _fib(n)

    console.log(memo)

    return res
}

/*
    Bottom-up
*/
let fib_bu = (n) => {
    let memo = [0, 1]

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n]
}

/*
    Bottom-up constant space
*/
let fib_bu_const = (n) => {
    if (n < 2) { return n }

    let n1 = 1
    let n2 = 0

    for (let i = 2; i < n; i++) {
        let n0 = n1 + n2
        n2 = n1
        n1 = n0
    }

    return n1 + n2
}


console.log(fib_bu_const(3))