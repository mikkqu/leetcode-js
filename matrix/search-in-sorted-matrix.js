
let searchInMatrix = (matrix, key) => {
    if (!matrix) { return false }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === key) {
                return true
            }
        }
    }

    return false
}

let searchInMatrixOptimal = (matrix, target) => {
    if (!matrix) { return false }
    if (!matrix.length || !matrix[0].length) { return false }

    let i = 0
    let j = matrix[0].length - 1

    while (i <= matrix.length - 1 && j >= 0) {
        if (matrix[i][j] == target) {
            return true
        } else if (matrix[i][j] < target) {
            i++
        } else {
            j--
        }
    }

    return false
}

let matrix = [
    [2, 4, 9, 13],
    [3, 5, 11, 18],
    [6, 8, 16, 21],
    [9, 11, 20, 25]
]

console.log(searchInMatrixOptimal(matrix, 16))