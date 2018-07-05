
let findMinSub = (s, t) => {
    let map = {};

    for (let i = 0; i < t.length; i++) {
        map[t[i]] = map[t[i]] + 1 || 1
    }

    console.log(map)

    let counter = t.length
    let begin = 0
    let end = 0
    let d = Number.MAX_VALUE
    let head = 0

    while (end < s.length) {
        if (map[s[end++]]-- > 0) {
            counter--
        }

        while (counter == 0) {
            if (end - begin < d) {
                d = end - (head = begin)
            }

            if (map[s[begin++]]++ == 0) {
                counter++
            }
        }
    }

    return d == Number.MAX_VALUE ? "" : s.substr(head, d)
}


let s = 'ADOBECODEBANC'
let t = 'ABC'
console.log(findMinSub(s, t))