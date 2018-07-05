let titleToNumber = (s) => {
    let n = 0

    for (let c of s) {
        let cm = (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1)
        n = n * 26 + cm;
    }

    return n
}

console.log(titleToNumber('st'))