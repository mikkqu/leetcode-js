
let removeDups = (str) => {
    let out = ''
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        if (hash.hasOwnProperty(ch)) {
            continue
        }

        out += ch
        hash[ch] = 1
    }

    return out
}

let removeDupsN2 = (str) => {
    str = str.split('')

    _removeDupsN2Arr = (str) => {
        let wPos = 0

        for (let i = 0; i < str.length; i++) {
            let found = false

            for (let j = 0; j < wPos; j++) {
                if (str[i] === str[j]) {
                    found = true
                    break
                }
            }

            if (!found) {
                str[wPos] = str[i]
                wPos++
            }
        }

        str = str.slice(0, wPos)

        return str
    }

    str = _removeDupsN2Arr(str)

    return str.join('')
}

let removeDupsEd = function(s) {
    let replaceAt = (str, i, ch) => {
        return str.substr(0, i) + ch + str.substr(i + ch.length)
    }

    let hashset = new Set()

    let wPos = 0
    let rPos = 0

    while (rPos < s.length) {
        let ch = s[rPos]

        if (!hashset.has(ch)) {
            hashset.add(ch)
            s = replaceAt(s, wPos, ch)
            wPos++
        }

        rPos++
    }

    return s.substr(0, wPos)
};

console.log(removeDupsN2('aabccde'))