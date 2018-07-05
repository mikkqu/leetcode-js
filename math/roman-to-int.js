var romanToInt = function(s) {
    let mapper = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let prev
    let num = 0

    for (let i = 0; i < s.length; i++) {
        let ch = s[i]

        num += mapper[ch]
        if (prev && mapper[prev] < mapper[ch]) {
            num -= mapper[prev] * 2
        }

        prev = ch
    }

    return num
};

console.log(romanToInt('IV'))