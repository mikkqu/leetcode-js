let score = (n) => {
    let table = []

    for (let i = 0; i <= n; i++) {
        table.push(0)
    }

    table[0] = 1

    console.log(table)

    for (let i = 1; i <= n; i++) {
        table[i] += table[i - 1]
    }

    for (let i = 2; i <= n; i++) {
        table[i] += table[i - 2]
    }

    for (let i = 5; i <= n; i++) {
        table[i] += table[i - 5]
    }

    console.log(table)

    return table[n]
}

let scoreWithRepeat = (n) => {
    if (n <= 0) { return 0 }

    //Max score is 4
    let memo = [0, 0, 0, 1];

    for (var i = 1; i < n + 1; i++) {
        let current_sum = memo[3] + memo[2] + memo[0];

        //slide left all the results in each iteration
        //result for current i will be saved at last index
        memo[0] = memo[1];
        memo[1] = memo[2];
        memo[2] = memo[3];
        memo[3] = current_sum;

        console.log(memo)
    }

    return memo[3];
}

console.log(scoreWithRepeat(5))