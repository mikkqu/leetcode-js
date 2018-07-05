let uniquePaths = (m, n) => {
    let currentRow = new Array(n)
    // Assigning a 1 to matrix[0][0] is simply a shortcut that skips some later computation
    // as matrix[i][0] will never change in this iterative process
    for (let i = 0; i < n; i++) {
        currentRow[i] = 1
    }

    console.log(currentRow)

    for (let row = 1; row < m; row++) {
        for (let i = 1; i < n; i++) {
            currentRow[i] += currentRow[i - 1]
        }
    }

    return currentRow[n - 1]
};

/*
    O(M * N) + O(M * N) space
*/
let up = (m, n) => {
    let path = new Array(n)

    for (let i = 0; i < n; i++) {
        path[i] = []

        for (let j = 0; j < m; j++) {
            path[i][j] = 1
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            path[i][j] = path[i - 1][j] + path[i][j - 1]
        }
    }

    return path[n - 1][m - 1]
}

/*
    O(M * N) + O(min(M, N)) space
*/
let up2 = (m, n) => {
    if (m > n) { return up2(n, m) } // m <= n

    let pre = new Array(m).fill(1)
    let cur = new Array(m).fill(1)

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            cur[j] = cur[j - 1] + pre[j]
        }

        let tmp = cur
        cur = pre
        pre = tmp
    }

    return pre[m - 1]
}

/*
    O(M * N) + O(min(M, N)) space
*/
let up3 = (m, n) => {
    if (m > n) { return up3(n, m) } // m <= n

    let cur = new Array(m).fill(1)

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            cur[j] += cur[j - 1]
        }
    }

    return cur[m - 1]
}

/*
    O(M) + O(1)
*/
let upFormula = (m, n) => {
    let N = n + m - 2  // how much steps we need to do
    let k = m - 1      // number of steps that need to go down

    let res = 1

    // Combination(N, k) = n! / (k!(n - k)!)
    // reduce the numerator and denominator and get
    // C = ( (n - k + 1) * (n - k + 2) * ... * n ) / k!
    for (let i = 1; i <= k; i++) {
        res *= Math.floor((N - k + i) / i)
    }

    return res;
}

// console.log(uniquePaths(3, 2))
console.log(upFormula(3, 3))