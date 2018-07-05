let match = (A, B) => {
    var a = 0
    var b = 0

    var match = 0
    var wildcard = -1

    while (a < A.length) {
        if (b < B.length && (B[b] == A[a] || B[b] == '?')) {
            a++
            b++
        } else if (b < B.length && B[b] == '*') {
            wildcard = b
            b++
            match = a
        } else if (wildcard != -1) {
            match++
            a = match
            b = wildcard + 1
        } else {
            return 0
        }
    }

    while (b < B.length && B[b] == '*') { b++ }

    return b == B.length ? 1 : 0
}

let s = 'aa'
let p = 'a*'
console.log(match(s, p))