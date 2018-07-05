let lengthOfLastWord = (s) => {
    let nonSpaceFlag = false
    let len = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) !== ' ') {
            len++

            if (!nonSpaceFlag) {
                nonSpaceFlag = true
            }
        } else {
            if (nonSpaceFlag) {
                break
            }
        }
    }

    return len
}

console.log(lengthOfLastWord('hey what'))