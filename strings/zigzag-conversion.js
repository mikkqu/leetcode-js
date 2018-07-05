
let convert = (s, numRows) => {
    if (numRows == 1) return s;

    let ret = ''
    let n = s.length;
    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            ret += s[j + i]
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
                ret += s[j + cycleLen - i]
        }
    }

    return ret
}

console.log(convert('hellomyfriend', 3))