/*
    O(N * M) + O(N * M) space
*/
let pushIfValid = (dim, arr, i, j) => {
    let [rows, cols] = dim

    if ((i >= 0) && (i < rows) && (j >= 0) && (j < cols)) {
        arr.push([i, j])
    }
}

let markIsland = (binaryMatrix, i, j) => {
    let arr = [[i, j]]
    let dim = [binaryMatrix.length, binaryMatrix[0].length]

    while (arr.length) {
        let [i, j] = arr.pop()

        if (binaryMatrix[i][j] == 1) {
            binaryMatrix[i][j] = 0

            pushIfValid(dim, arr, i - 1, j)
            pushIfValid(dim, arr, i, j - 1)
            pushIfValid(dim, arr, i + 1, j)
            pushIfValid(dim, arr, i, j + 1)
        }
    }
}

let countIslands = (binaryMatrix) => {
    let islands = 0

    for (let i = 0; i < binaryMatrix.length; i++) {
        for (let j = 0; j < binaryMatrix[i].length; j++) {
            if (binaryMatrix[i][j] == 1) {
                markIsland(binaryMatrix, i, j)
                islands++
            }
        }
    }

    return islands
}

/*
    Alt
*/
let countIslandsAlt = (matrix) => {
    if (!matrix.length || !matrix[0].length) { return -1 }

    let traverse = (i, j) => {
        if (i < 0 || i > matrix.length - 1) { return }
        if (j < 0 || j > matrix[0].length - 1) { return }
        if (matrix[i][j] === 0) { return }

        matrix[i][j] = 0

        traverse(i + 1, j)
        traverse(i - 1, j)
        traverse(i, j + 1)
        traverse(i, j - 1)
    }

    let islands = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                traverse(i, j)
                islands++
            }
        }
    }

    return islands
}

let arr = [
    [1, 1, 1, 1]
]

console.log(countIslands(arr))
