
let maxProfit = (S) => {
    if (S.length < 2) { return 0 }

    let max = 0

    for (let i = 0; i < S.length - 1; i++) {
        for (let j = i + 1; j < S.length; j++) {
            max = Math.max(max, S[j] - S[i])
        }
    }

    return max
}

// let L = [5, 8, 3, 5]
// let H = [10, 15, 7, 12]
let S = [6, 10, 5, 12]

console.log(maxProfit(S))