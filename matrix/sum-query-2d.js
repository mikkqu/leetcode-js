
let [n, m] = [3, 3]
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let sat = []
for (let i = 0; i < n; i++) {
    sat[i] = []
}

let getSat = (i, j) => {
    if (i < 0 || j < 0) { return 0; }

    if (!sat[i][j]) {
        sat[i][j] = matrix[i][j] +
                    getSat(i - 1, j) +
                    getSat(i, j - 1) -
                    getSat(i - 1, j - 1)
    }

    console.log('getSat:', i, j, sat[i][j])
    return sat[i][j]
}

let [qi, qj] = [3, 3]

console.log(getSat(qi - 1, qj - 1))        // =45