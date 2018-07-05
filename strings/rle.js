
let rle = (str) => {
    if (!str) { return 'Fail' }

    out = ''

    for (let i = 0; i < str.length; i++) {
        out += str[i]

        let count = 1
        while (str[i] == str[i + 1]) {
            count++
            i++
        }

        if (count > 1) {
            out += count
        }
    }

    return out
}


console.log(rle('AFFFB'))