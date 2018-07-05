
let readNgiven4 = () => {
    let buffPtr = 0
    let buffCnt = 0
    let buff = []

    let read = (buf, n) => {
        let ptr = 0

        while (ptr < n) {
            if (buffPtr == 0) {
                buffCnt = read4(buff)
            }

            if (buffCnt == 0) { break }

            while (ptr < n && buffPtr < buffCnt) {
                buf[ptr++] = buff[buffPtr++]
            }

            if (buffPtr >= buffCnt) {
                buffPtr = 0
            }
        }

        return ptr
    }
}