let removeWhitespaces = (str) => {
    if (!str || str.length === 0) { return '' }

    str = str.split('')

    let rPos = 0
    let wPos = 0

    while (rPos < str.length) {
        if (str[rPos] != ' ' && str[rPos] != '\t') {
            str[wPos] = str[rPos]
            wPos++
        }

        rPos++
    }

    str = str.slice(0, wPos)

    return str.join('')
}

let removeWhitespacesQuick = (str) => {
    return str.replace(/\s/g, '')
}

console.log(removeWhitespacesQuick('  this is the\t  test  string'))
