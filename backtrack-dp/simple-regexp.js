
let matchDp = (text, pattern) => {
    let memo = []

    for (let i = 0; i < text.length + 1; i++) { memo[i] = [] }

    let dp = (i, j, text, pattern) => {
        if (memo[i][j] != null) {
            return (memo[i][j] === true)
        }

        let out

        if (j == pattern.length) {
            out = (i == text.length)
        } else {
            let firstMatch = (i < text.length &&
                                (pattern[j] == text[i] ||
                                pattern[j] == '.'))

            if (j + 1 < pattern.length && pattern[j + 1] == '*') {
                out = (dp(i, j + 2, text, pattern) ||
                        firstMatch && dp(i + 1, j, text, pattern));
            } else {
                out = firstMatch && dp(i + 1, j + 1, text, pattern);
            }
        }

        memo[i][j] = out
        return out
    }

    let res = dp(0, 0, text, pattern)

    return res
}


let match = (text, pattern) => {
    if (!pattern) { return !text }

    let m = ((text) &&
            ((pattern[0] == text[0]) ||
            (pattern[0] == '.')))

    if (pattern.length >= 2 && pattern[1] == '*') {
        return (match(text, pattern.slice(2)) ||
                (m && match(text.slice(1), pattern)))
    } else {
        return m && match(text.slice(1), pattern.slice(1))
    }
}

let s = 'aa'
let p = 'a*'
console.log(matchDp(s, p))