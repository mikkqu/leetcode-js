
class SubMatrix {
    constructor(r1, c1, r2, c2, sm) {
        this.row1 = r1
        this.col1 = c1
        this.row2 = r2
        this.col2 = c2
        this.sum = sm
    }

    getSum() {
        return this.sum
    }
}

/*
    O(N ^ 6)
*/
let findMaxSubmatrix = (matrix) => {
    let getSum = (matrix, row1, col1, row2, col2) => {
        let sum = 0

        for (let r = row1; r <= row2; r++) {
            for (let c = col1; c <= col2; c++) {
                sum += matrix[r][c]
            }
        }

        return sum
    }

    let rowCount = matrix.length
    let colCount = matrix[0].length

    let best = null

    for (let row1 = 0; row1 < rowCount; row1++) {
        for (let row2 = 0; row2 < rowCount; row2++) {
            for (let col1 = 0; col1 < colCount; col1++) {
                for (let col2 = 0; col2 < colCount; col2++) {
                    let sum = getSum(matrix, row1, col1, row2, col2)

                    if (!best || best.getSum() < sum) {
                        best = new SubMatrix(row1, col1, row2, col2, sum)
                    }
                }
            }
        }
    }

    return best
}

/*
    O(N ^ 4)
*/
let precomputeSums = (matrix) => {
    let sumThrough = []

    for (let i = 0; i < matrix.length; i++) {
        sumThrough[i] = []

        for (let j = 0; j < matrix[0].length; j++) {
            sumThrough[i][j] = 0
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            let left = c > 0 ? sumThrough[r][c - 1] : 0
            let top = r > 0 ? sumThrough[r - 1][c] : 0
            let overlap = (r > 0 && c > 0) ? sumThrough[r - 1][c - 1] : 0

            sumThrough[r][c] = left + top - overlap + matrix[r][c]
        }
    }

    console.log(sumThrough)

    return sumThrough
}

let findMaxSubmatrixDp = (matrix) => {
    let getSum = (sumThrough, r1, c1, r2, c2) => {
        let topAndLeft = (r1 > 0 && c1 > 0) ?
                         sumThrough[r1 - 1][c1 - 1] : 0
        let left = c1 > 0 ? sumThrough[r2][c1 - 1] : 0
        let top = r1 > 0 ? sumThrough[r1 - 1][c2] : 0
        let full = sumThrough[r2][c2]

        return full - left - top + topAndLeft
    }

    let rowCount = matrix.length
    let colCount = matrix[0].length

    let best = null

    let sumThrough = precomputeSums(matrix)

    for (let row1 = 0; row1 < rowCount; row1++) {
        for (let row2 = 0; row2 < rowCount; row2++) {
            for (let col1 = 0; col1 < colCount; col1++) {
                for (let col2 = 0; col2 < colCount; col2++) {
                    let sum = getSum(sumThrough, row1, col1, row2, col2)

                    if (!best || best.getSum() < sum) {
                        best = new SubMatrix(row1, col1, row2, col2, sum)
                    }
                }
            }
        }
    }

    return best
}

/*
    O(N ^ 3)
*/
class Range {
    constructor(start, end, sum) {
        this.start = start
        this.end = end
        this.sum = sum
    }
}

let maxSubArray = (array, N) => {
    let best = null
    let start = 0
    let sum = 0

    for (let i = 0; i < N; i++) {
        sum += array[i]

        if (!best || sum > best.sum) {
            best = new Range(start, i, sum)
        }

        if (sum < 0) {
            start = i + 1
            sum = 0
        }
    }

    return best
}

let findMaxSubmatrixN3 = (matrix) => {
    let rowCount = matrix.length
    let colCount = matrix[0].length

    let best = null

    for (let rowStart = 0; rowStart < rowCount; rowStart++) {
        let partialSum = []

        for (let i = 0; i < colCount; i++) {
            partialSum[i] = 0
        }

        for (let rowEnd = rowStart; rowEnd < rowCount; rowEnd++) {
            for (let i = 0; i < colCount; i++) {
                partialSum[i] += matrix[rowEnd][i]
            }

            let bestRange = maxSubArray(partialSum, colCount)
            if (!best || best.getSum() < bestRange.sum) {
                best = new SubMatrix(rowStart, bestRange.start,
                                     rowEnd, bestRange.end, bestRange.sum)
            }
        }
    }

    return best
}


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [-8, 9, -9]
]

console.log(findMaxSubmatrixN3(matrix))