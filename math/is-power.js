let isPower = (A) => {
    let x = 2

    if (A == 1) return 1

    for (let i = 2; (i < 33) && (x <= (Math.pow(2,16))); i++) {
        if (Math.pow(x, i) == A) { return 1 }
        if (Math.pow(x, i) >= (Math.pow(2, 32))) {
            i = 1
            x++
        }
    }

    return 0
}

console.log(isPower(16))