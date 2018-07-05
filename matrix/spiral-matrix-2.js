let generateMatrix = (n) => {
    let square = Array(n).fill(0).map(() => Array(n).fill(0))
    let count = 0
    let row = 0
    let col = 0

    while (count < n * n) {
        while (square[row][col] === 0) {
            square[row][col++] = ++count
        }
        col--
        row++

        while (square[row] && square[row][col] === 0) {
            square[row++][col] = ++count
        }
        row--
        col--

        while (square[row][col] === 0) {
            square[row][col--] = ++count
        }
        col++
        row--

        while (square[row] && square[row][col] === 0) {
            square[row--][col] = ++count
        }
        row++
        col++
    }

    return square
}

console.log(generateMatrix(4))