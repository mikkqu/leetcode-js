let leastCommonNumber = (a, b, c) => {
    let [ i, j, k ] = [ 0, 0, 0 ]

    while (i < a.length && j < b.length && k < c.length) {
        if (a[i] === b[j] && b[j] === c[k]) {
            return a[i]
        }

        if (a[i] <= b[j] && a[i] <= c[k]) {
            i++
        } else if (b[j] <= a[i] && b[j] <= c[k]) {
            j++
        } else if (c[k] <= a[i] && c[k] <= b[j]) {
            k++
        }
    }

    return -1
}

let a = [6, 7, 10, 25, 40, 63]
let b = [-1, 4, 5, 6, 8]
let c = [1, 6, 7, 10, 14]

console.log(leastCommonNumber(a, b, c))