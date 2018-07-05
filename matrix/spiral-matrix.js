
let spiralMatrix = (matrix) => {
    if (!matrix.length || !matrix[0].length) { return null }

    let arr = []

    let topRow = 0
    let rightCol = matrix[0].length - 1
    let botRow = matrix.length - 1
    let leftCol = 0

    while ((leftCol <= rightCol) && (topRow <= botRow)) {
        for (let i = leftCol; i <= rightCol; i++) {
            arr.push(matrix[topRow][i])
        }
        topRow++

        for (let i = topRow; i <= botRow; i++) {
            arr.push(matrix[i][rightCol])
        }
        rightCol--

        if (topRow <= botRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                arr.push(matrix[botRow][i])
            }
            botRow--
        }

        if (leftCol <= rightCol) {
            for (let i = botRow; i >= topRow; i--) {
                arr.push(matrix[i][leftCol])
            }
            leftCol++
        }
    }

    return arr
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.log(spiralMatrix(matrix))