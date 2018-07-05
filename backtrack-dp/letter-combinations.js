let letterCombinationsReduce = (digits) => {
    let combinations = {
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4" : ["g","h","i"],
        "5" : ["j","k","l"],
        "6" : ["m","n","o"],
        "7" : ["p","q","r","s"],
        "8" : ["t","u","v"],
        "9" : ["w","x","y","z"],
    };

    let result = []

    for (let i = 0; i < digits.length; i++) {
        if (result.length == 0) {
            result = combinations[digits[i]]
        } else {
            result = combinations[digits[i]]
                .map(x => result.map(r => r + x))
                .reduce((acc, val) => acc.concat(val), [])
        }
    }

    return result;
}

let letterCombinations = (digits) => {
    const mapping = {
        "0" : ["0"],
        "1" : ["1"],
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4" : ["g","h","i"],
        "5" : ["j","k","l"],
        "6" : ["m","n","o"],
        "7" : ["p","q","r","s"],
        "8" : ["t","u","v"],
        "9" : ["w","x","y","z"]
    };

    let bt = (digits, currStr) => {
        let index = currStr.length

        if (index == digits.length) {
            out.push(currStr);
            return;
        }

        let currChar = digits[index]
        let currMap = mapping[currChar]

        for (var i = 0; i < currMap.length; i++) {
            bt(digits, currStr + currMap[i])
        }
    };

    let out = []

    bt(digits, "")

    return out
}

console.log(letterCombinations('0'))