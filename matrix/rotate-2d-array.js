let printArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let line = ''

        for (let j = 0; j < arr[0].length; j++) {
            line += arr[i][j] + ' '
        }

        console.log(line)
    }
}

let rotate = (arr) => {
    let revArr = []

    for (let i = 0; i < arr[0].length; i++) {
        revArr[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            revArr[j][i] = arr[i][j]
        }
    }

    return revArr
}

let rotateInPlace = (arr) => {
    if (!arr || arr.length !== arr[0].length) { return -1 }

    let n = arr.length

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            // console.log('j =', j)
            // console.log(`left-up: [${i}, ${j}]`)
            // console.log(`right-up: [${j}, ${n - 1 - i}]`)
            // console.log(`right-down: [${n - 1 - i}, ${n - 1 - j}]`)
            // console.log(`bottom-down: [${n - 1 - j}, ${i}]`)

            let tmp = arr[i][j]
            arr[i][j] = arr[n - 1 - j][i]
            arr[n - 1 - j][i] = arr[n - 1 - i][n - 1 - j]
            arr[n - 1 - i][n - 1 - j] = arr[j][n - 1 - i]
            arr[j][n - 1 - i] = tmp
        }
    }

    return arr
}

let m = [
    [0, 1, 2, 3],
    [4, 5, 6, 7]
]

let p = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]


printArr(rotate(m))
console.log('---')
printArr(rotateInPlace(p))