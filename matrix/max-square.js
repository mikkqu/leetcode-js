
let maxSquare = (matrix) => {
    if (!matrix.length) { return 0 }

    let biggerMatrix = []
    for (let i = 0; i < matrix.length + 1; i++) {
        let row = []

        for (let j = 0; j < matrix[0].length + 1; j++) {
            row.push(0)
        }

        biggerMatrix.push(row)
    }

    let max = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (parseInt(matrix[i][j]) === 0) {
                biggerMatrix[i + 1][j + 1] = 0
            } else {
                biggerMatrix[i + 1][j + 1] =
                    parseInt(matrix[i][j]) +
                    Math.min(
                        biggerMatrix[i][j],
                        biggerMatrix[i + 1][j],
                        biggerMatrix[i][j + 1]
                    )
                max = Math.max(max, biggerMatrix[i + 1][j + 1])
            }
        }
    }

    return max * max
}

let matrix = [
    ['1', '1', '1'],
    ['0', '1', '1'],
    ['1', '0', '1']
]

console.log(maxSquare(matrix))