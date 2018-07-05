let isValid = (s) => {
    let n = s.length
    if (n == 0) {
        return true
    }

    if (n % 2 != 0) {
        return false
    }

    while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
        s = s.replace('{}', '').replace('()', '').replace('[]', '')
    }

    if (s == '') {
        return true
    } else {
        return false
    }
}

console.log(isValid('[][]([)'))

