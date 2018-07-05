/*
    Never do this
*/
let coinChange_awful_BruteForce = (coins, sum) => {
    let change = (coins, sum, index) => {
        if (sum === 0) { return 0 }
        if (index === coins.length) { return -1 }

        let maxNumberOfSameCoin = Math.floor(sum / coins[index])
        let minCoins = Infinity

        for (let x = 0; x <= maxNumberOfSameCoin; x++) {
            let res = change(coins, sum - x * coins[index], index + 1)
            if (res != -1) {
                minCoins = Math.min(minCoins, x + res)
            }
        }

        return minCoins == Infinity ? -1 : minCoins
    }

    return change(coins, sum, 0)
}

/*
    Valid brute force
*/
let coinChangeBruteForce = (coins, c, lv) => {
    if (c === 0) { return 0 }

    let minCoins = Infinity

    for (let coin of coins) {
        if (c - coin < 0) { continue }

        let currMinCoins = change(coins, c - coin)
        minCoins = Math.min(minCoins, currMinCoins)
    }

    return minCoins + 1
}

/*
    Bottom-up
*/
let coinChangeDpBu = (coins, c) => {
    let memo = [0]

    for (let i = 1; i <= c; i++) {
        minCoins = Infinity

        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0) { continue }

            let currMinCoins = memo[i - coins[j]] + 1
            minCoins = Math.min(minCoins, currMinCoins)
        }

        memo[i] = minCoins
    }

    return memo[c]
}

/*
    Top-down
*/
let coinChangeDpTd = (coins, c) => {
    let memo = [0]

    let _changeDp = (coins, c) => {
        if (memo[c] !== undefined) { return memo[c] }

        let minCoins = Infinity

        for (let coin of coins) {
            if (c - coin < 0) { continue }

            let currMinCoins = _changeDp(coins, c - coin)
            minCoins = Math.min(minCoins, currMinCoins)
        }

        memo[c] = minCoins + 1
        return memo[c]
    }

    return _changeDp(coins, c)
}


let coins = [1, 3, 5]
let sum = 14

let res = coinChangeDpBu(coins, sum)
console.log(res)