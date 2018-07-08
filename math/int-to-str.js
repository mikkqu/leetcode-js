
let intToString = (x) => {
    if (x == 0) { return 0 }

    let str = ''
    let isNegative

    if (x < 0) {
        x = -x
        isNegative = true
    } else {
        isNegative = false
    }

    while (x) {
        str = x % 10 + str
        x = Math.floor(x / 10)
    }

    if (isNegative) {
        str = '-' + str
    }

    return str
}

let stringToInt = (str) => {
    let isNegative = (str[0] == '-')
    let x = 0

    for (let i = Number(isNegative); i < str.length; i++) {
        x = x * 10 + parseInt(str[i])
    }

    return isNegative ? -x : x
}

console.log(intToString(42), typeof intToString(42))
console.log(stringToInt('42'), typeof stringToInt('42'))