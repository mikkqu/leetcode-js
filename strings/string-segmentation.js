
let canBeSegmented = (words, str) => {
    if (!wordDict || wordDict.length == 0) { return false }

    let dp = new Array(s.length + 1)

    dp.fill(false)
    dp[0] = true

    for (var i = 1; i <= s.length; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {

                dp[i] = true
                break
            }
        }
    }

    return dp[s.length]
}

let words = ['apple', 'pie', 'peer', 'pear']

console.log(canBeSegmented('applepie', words))