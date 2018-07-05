/*
    O(n^3)
*/
let allUnique = (str) => {
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            return false
        }

        hash[str[i]] = true
    }

    return true
}

let longestSub = (str) => {
    let ans = 0

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            if (allUnique(str.slice(i, j))) {
                ans = Math.max(ans, j - i)
            }
        }
    }

    return ans
}

/*
    O(n)
*/
let longestSubN = (str) => {
    let hash = {}

    let ans = 0
    let i = 0
    let j = 0

    while (i < str.length && j < str.length) {
        let keyChar = str[j]

        if (!hash[keyChar]) {
            hash[keyChar] = true
            ans = Math.max(ans, j - i)
            j++
        } else {
            delete hash[keyChar]
            i++
        }
    }

    return ans;
}

/*
    O(n) optimal
*/
let longestSubOpt = (str) => {
    if (!str.length) { return 0 }

    let hash = {}

    let ans = 0
    let lastRepeat = 0

    for (let curr = 0; curr < str.length; curr++) {
        let ch = str[curr]

        if (hash[ch]) {
            lastRepeat = Math.max(hash[ch], lastRepeat)
        }

        ans = Math.max(ans, curr - lastRepeat + 1)
        hash[ch] = curr + 1

        console.log(lastRepeat, curr, ch, hash)
    }

    return ans
}

console.log(longestSubOpt('wptwgax'))
//console.log(longestSubOpt('pwwkew'))