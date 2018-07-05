
let expandAroundCenter = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--
        r++
    }

    return r - l - 1
}

let longestPalSub = (s) => {
    let start = 0
    let end = 0

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        let len = Math.max(len1, len2)

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }

    return s.substring(start, end + 1)
}

console.log(longestPalSub('babad'))