
let minWindow = (str, dict) => {
    let map = {}

    for (let ch of str) {
        map[ch] = map[ch]++ || 0
    }

    for (let ch of dict) {
        if (map.hasOwnProperty(ch)) {
            map[ch]++
        } else {
            return ''
        }
    }

    let begin = 0
    let end = 0

    let minLen = Number.MAX_SAFE_INTEGER
    let counter = dict.length
    let head = 0

    while (end < str.length) {
        let ch = str[end++]

        if (map[ch] > 0) {
            counter--
        }
        map[ch]--

        while (counter == 0) {
            if (minLen > end - begin) {
                head = begin
                minLen = end - begin
            }

            let ch = str[begin++]
            if (map[ch] == 0) {
                counter++
            }
            map[ch]++
        }
    }

    console.log(minLen)

    return (minLen == Number.MAX_SAFE_INTEGER) ? '' : str.slice(head, head + minLen)
}

let str = 'ADOBECODEBANC'
let dict = 'ABC'

console.log(minWindowSubstring(str, dict))