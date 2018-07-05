let isPalindrome = (s) => {
    if (s == null) {
        return true
    }

    let out = s.replace(/[^\w]/g, '').toLowerCase()

    let l = 0
    let r = out.length - 1

    for (let i = 0; i < Math.floor(out.length / 2); i++) {
        if (out[l] != out[r]) {
            return false
        }

        l++
        r--
    }

    return true
};

console.log(isPalindrome('catac'))