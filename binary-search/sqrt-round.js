
/*
    We keep converging search space until 'left' = 'mid'.
    We have found the last number for which (m * m <= x) is true.
*/
let sqrt = (x) => {
    if (x == 0) { return 0 }

    let left = 1, right = x >>> 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        console.log(left, mid, right)

        if (mid * mid > x) {
            right = mid - 1 /* answer <= right */
        } else {
            // if (mid + 1 > x / (mid + 1)) { return mid }

            left = mid + 1
        }
    }

    return right
}

let sqrtNewton = (x) => {
    let r = x

    while (r * r > x) {
        r = ((r + x / r) / 2) | 0
    }

    return r
}

console.log(sqrtNewton(18))