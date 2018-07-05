
let solveSudoku = (board) => {
    if (!board || board.length == 0) { return }

    solve(board)
}

let nextEmpty = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.') {
                return [i, j]
            }
        }
    }

    return false
}

let solve = (board) => {
    let next = nextEmpty(board)

    if (!next) { return true }

    let [ i, j ] = next

    for (let c = 1; c <= 9; c++) {
        if (!isValid(board, i, j, c)) {
            continue
        }

        board[i][j] = c.toString()

        if (solve(board)) {
            return true
        }

        board[i][j] = '.'
    }

    return false
}

let isValid = (board, row, col, c) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i][col] !== '.' && board[i][col] == c) { return false }
        if (board[row][i] !== '.' && board[row][i] == c) { return false }

        let ptX = 3 * Math.floor(row / 3) + Math.floor(i / 3)
        let ptY = 3 * Math.floor(col / 3) + i % 3

        if (board[ptX][ptY] !== '.' && board[ptX][ptY] == c) {
            return false
        }
    }

    return true
}

let board = [
    [5, 3, 4,   6, 7, 8,    9, '.', '.'],
    [6, 7, 2,   1, 9, 5,    3, 4, 8],
    [1, 9, 8,   3, 4, 2,    5, 6, 7],

    [8, 5, 9,   7, 6, 1,    4, 2, 3],
    [4, 2, 6,   8, 5, 3,    7, 9, 1],
    [7, 1, 3,   9, 2, 4,    8, 5, 6],

    [9, 6, 1,   5, 3, 7,    2, 8, 4],
    [2, 8, 7,   4, 1, 9,    6, 3, 5],
    [3, 4, 5,   2, 8, 6,    1, 7, 9]
]

solveSudoku(board)
console.log(board)