let computeEditDistance = (str1, str2) => {
    if (str1 === str2) { return 0 }
    if (str1.length === 0) { return str2.length }
    if (str2.length === 0) { return str1.length }

    let d1 = new Array(str1.length + 1).fill(0)
    let d2 = new Array(str2.length + 1).fill(0)

    for (let i = 0; i < str2.length + 1; i++) {
        d1[i] = i
    }

    for (let i = 0; i < str1.length; i++) {
        d2[0] = i + 1

        let cost = 0
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                cost = 0
            } else {
                cost = 1
            }

            d2[j + 1] = Math.min(d2[j] + 1, d1[j + 1] + 1, d1[j] + cost)
        }

        for (let j = 0; j < str2.length + 1; j++) {
            d1[j] = d2[j]
        }
    }

    return d2[str2.length]
}

console.log(computeEditDistance("beatch", "beach"))