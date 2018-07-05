let countAndSay = (n) => {
    let s = "1"

    for (let i = 1; i < n; i++) {
        s = countIdx(s)
    }

    return s
}

let countIdx = (s) => {
    sb = ''

    let c = s[0]
    let count = 1

    for (let i = 1; i < s.length; i++) {
        if (s[i] == c) {
            count++
        } else {
            sb += count
            sb += c
            c = s[i]
            count = 1
        }
    }

    sb += count
    sb += c

    return sb
}

console.log(countAndSay(5))