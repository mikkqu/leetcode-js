
let decrypt = (msg) => {
    let msgArr = msg.map((item) => item.charCodeAt())

    let aAscii = 'a'.charCodeAt()
    let rm = 1

    for (let i = msgArr.length - 1; i > 0; i--) {
        msgArr[i] -= msgArr[i - 1]

        msgArr[i] %= 26
        while (msgArr[i] < aAscii) {
            msgArr[i] += 26
        }
    }

    msgArr[0] -= 1

    return msgArr.map((item) => String.fromCharCode(item))
}

console.log(decrypt('dnotq'.split('')))