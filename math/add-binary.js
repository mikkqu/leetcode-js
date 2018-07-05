
let sum = (a, b) => {
    let result = ""
    let s = 0

    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0 || s == 1) {
        s += (i >= 0) ? parseInt(a[i]) : 0
        s += (j >= 0) ? parseInt(b[j]) : 0

        result = s % 2 + result

        s = Math.floor(s / 2)

        i--
        j--
    }

    return result
}

console.log(sum('11', '01'))

