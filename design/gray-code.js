let grayCode = (n) => {
    if (n === 0) return [ 0 ]

    let res = grayCode(n - 1)
    let mask = 1 << n - 1

    for (let i = res.length - 1; i >= 0; i--) {
        res.push(res[i] | mask)
    }

    return res
}

console.log(grayCode(4))