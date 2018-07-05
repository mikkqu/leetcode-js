
let countWays = (s) => {
    let n = s.length

    if (n === 0) { return }

    let memo = []
    for (let i = 0; i <= s.length; i++) { memo[i] = 0 }

    memo[n] = 1
    memo[n - 1] = s[n - 1] !== '0' ? 1 : 0

    for (let i = n - 2; i >= 0; i--) {
        if (s[i] !== '0') {
            let sub = parseInt(s.substring(i, i + 2))
            memo[i] = sub <= 26 ? memo[i + 2] + memo[i + 1] : memo[i + 1]
        }
    }

    return memo[0]
}

let input = '12120'
console.log(countWays(input))