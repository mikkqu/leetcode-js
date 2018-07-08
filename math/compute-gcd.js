
/*
    Do not use *, / or %

    O(log(x) + log(y))
*/
let gcd = (x, y) => {
    if (x == y) {
        return x
    } else if ((x & 1) == 0 && (y & 1) == 0) {
        return gcd(x >>> 1, y >>> 1) << 1
    } else if ((x & 1) == 0 && (y & 1) != 0) {
        return gcd(x >>> 1, y)
    } else if ((x & 1) != 0 && (y & 1) == 0) {
        return gcd(x, y >>> 1)
    } else if (x > y) {
        return gcd(x - y, y)
    }

    return gcd(x, y - x)
}

console.log(gcd(45, 15))