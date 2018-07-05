let isAttacked = (row, col, board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[row][i] === 1) { return true }
    }

    for (let i = 0; i < board[0].length; i++) {
        if (board[i][col] === 1) { return true }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if ((i - j) === (row - col)) {
                if (board[i][j] === 1) {
                    return true
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if ((i + j) === (row + col)) {
                if (board[i][j] === 1) {
                    return true
                }
            }
        }
    }

    return false
}

let solve = (board, n) => {
    if (n === 0) { return true }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {

            if (isAttacked(row, col, board)) {
                continue
            }

            board[row][col] = 1

            if (solve(board, n - 1)) {
                return true
            }

            board[row][col] = 0
        }
    }
    return false
}

let printBoard = (board) => {
    let n = board.length

    for (let i = 0; i < n; i++) {
        let line = ''
        for (let j = 0; j < n; j++) {
            line += board[i][j] + ' '
        }
        console.log(line)
    }
}

let createEmptyBoard = (n) => {
    let board = []

    for (let i = 0; i < n; i++) {
        board[i] = []
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = 0
        }
    }

    return board
}

let n = 4
let board = createEmptyBoard(n)

if (solve(board, n)) {
    console.log('YES')

    printBoard(board)
} else {
    console.log('NO')
}