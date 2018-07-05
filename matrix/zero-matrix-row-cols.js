
let zeroMatrix = (matrix) => {
    let col0 = 1

    let rows = matrix.length
    let cols = matrix[0].length

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) { col0 = 0 }

        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = matrix[0][j] = 0
            }
        }
    }

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 1; j--) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }

        if (col0 == 0) { matrix[i][0] = 0 }
    }

    return matrix
}

/*
    Time: O(m * n)
    Space: O(1)
*/

let nullifyRow = (matrix, row) => {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0
    }
}

let nullifyColumn = (matrix, col) => {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0
    }
}

let nullify = (matrix) => {
    let rowHasZero = false
    let colHasZero = false

    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] == 0) {
            rowHasZero = true
            break
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            colHasZero = true
            break
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            nullifyRow(matrix, i)
        }
    }

    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] == 0) {
            nullifyColumn(matrix, j)
        }
    }

    if (rowHasZero) {
        nullifyRow(matrix, 0)
    }

    if (colHasZero) {
        nullifyColumn(matrix, 0)
    }

    return true
}


let matrix2 = [
    [1, 1, 0],
    [1, 2, 2],
    [1, 1, 0]
]

console.log(nullify(matrix2))
console.log(matrix2)


let matrix = [
    [5, 4, 3, 9],
    [2, 0, 7, 6],
    [1, 3, 4, 0],
    [9, 8, 3, 4]
]

console.log(zeroMatrix(matrix))