
let squareRootIter = (x) => {
    if (x < 0) { return -1 }
    if (x === 0 || x === 1) { return x }

    let low = 1
    let high = (x >>> 1)

    while (low <= high) {
        let mid = (low + high) >>> 1

        let sqr = mid * mid
        let sqrp = (mid + 1) * (mid + 1)

        if (sqr <= x && sqrp > x) {
            return mid
        } else if (sqr > x) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
}

let sqrt = (x) => {
    if (x == 0 || x == 1) { return x }

    let left = 1
    let right = x >>> 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        if (mid > x / mid) { /* same as mid * mid > x but prevents overflow */
            right = mid - 1 /* answer <= (mid - 1) */
        } else {
            left = mid + 1
        }
    }

    return right
}

for (let i = 0; i < 64; i++) {
    console.log(i, sqrt(i))
}

