var myPow = function(x, n) {
    if (n == 0) return 1
    if (n < 0) {
        n = -n
        x = 1 / x
    }

    return n % 2 == 0 ?
        myPow(x * x, Math.floor(n / 2)) :
        x * myPow(x * x, Math.floor(n / 2))
};


let power = (x, n) => {
    let _power = (x, n) => {
        if (n === 0) { return 1 }
        if (n === 1) { return x }

        let temp = _power(x, Math.floor(n / 2))
        if (n % 2 === 0) {
            return temp * temp
        } else {
            return x * temp * temp
        }
    }

    let is_negative = false
    if (n < 0) {
        is_negative = true
        n *= -1
    }

    let result = _power(x, n)
    if (is_negative) {
        return 1 / result
    }

    return result
}

console.log(power(16, 4))