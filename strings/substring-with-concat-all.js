
let findSubstringMap = (s, words) => {
    var helper = (s, words, l, i, length) => {
        if (i + length > s.length) {
            return false
        }

        let map = new Map()

        for (word of words) {
            if (map.has(word)) {
                map.set(word, map.get(word) + 1)
            } else {
                map.set(word, 1)
            }
        }

        let sub = s.substring(i, i + length)

        for (let j = 0; j < length; j += l) {
            let chunk = sub.substring(j, j + l)
            if (map.has(chunk) && map.get(chunk) >= 1) {
                map.set(chunk, map.get(chunk) - 1)
            } else {
                return false
            }
        }

        return true
    }

    if (!words.length || !words[0].length) { return [] }

    let length = words.length * words[0].length
    let l = words[0].length

    let map = new Map()
    let result = []

    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(i, i + l)

        if (words.indexOf(sub) !== -1 && helper(s, words, l, i, length)) {
            result.push(i)
        }
    }

    return result
}

let findSubstring = (s, words) => {
    if (!s.length || !words.length) { return [] }

    let out = []
    let hash = {}

    for (let word of words) {
        hash[word] = hash[word] + 1 || 1
    }

    for (let i = 0; i < s.length; i++) {
        let currHash = Object.assign({}, hash)
        let wordsFound = 0
        let startIdx = i
        let currIdx = i

        for (let j = 0; j < words.length; j++) {
            let word = words[j]

            if (!currHash[word] ||
                !(s.slice(currIdx, currIdx + word.length) === word)) {
                continue
            }

            currHash[word]--
            wordsFound++
            currIdx += word.length

            j = -1
        }

        if (wordsFound === words.length) {
            out.push(startIdx)
        }
    }

    return out
}


let str = 'barfoothefoobarman'
let words = ['foo', 'bar']

console.log(find2(str, words))