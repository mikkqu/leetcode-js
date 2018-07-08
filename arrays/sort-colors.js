
let sortThreeColors = (arr) => {
    if (!arr || !arr.length) { return [] }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let l = 0
    let m = 0
    let r = arr.length - 1

    while (m <= r) {
        if (arr[m] === 0) {
            swap(arr, m, l)
            l++
            m++
        } else if (arr[m] === 1) {
            m++
        } else if (arr[m] === 2) {
            swap(arr, m, r)
            r--
        }
    }

    return arr
}

let sortFourColors = (arr) => {
    if (!arr || !arr.length) { return [] }

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pos = 0
    let color = 0

    while (pos < arr.length) {
        for (let i = pos; i < arr.length; i++) {
            if (arr[i] === color) {
                swap(arr, i, pos)
                pos++
            }
        }

        color++
    }

    return arr
}

let sortFourColorsOnePass = (arr) => {
    if (!arr || !arr.length) { return [] }

    arr.push['x']

    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let i = 0

    let mostRightPlacedZero = -1
    let numOnes = 0

    let numTwos = 0
    let mostLeftPlacedThree = arr.length

    while (i < mostLeftPlacedThree - numTwos) {
        console.log(i, arr, mostRightPlacedZero, numOnes, numTwos, mostLeftPlacedThree)
        if (arr[i] === 0) {
            swap(arr, mostRightPlacedZero + 1, i)
            swap(arr, mostRightPlacedZero + 1 + numOnes, i)

            mostRightPlacedZero++
            i++
        } else if (arr[i] === 1) {
            swap(arr, mostRightPlacedZero + numOnes + 1, i)

            numOnes++
            i++
        } else if (arr[i] === 2) {
            swap(arr, mostLeftPlacedThree - numTwos - 1, i)

            numTwos++
        } else if (arr[i] === 3) {
            swap(arr, mostLeftPlacedThree - 1, i)
            swap(arr, mostLeftPlacedThree - 1 - numTwos, i)

            mostLeftPlacedThree -= 1
        }
    }

    return arr
}

// console.log(sortThreeColors([1, 0, 2, 0, 0, 1]))
// console.log(sortFourColors([1, 0, 0, 0, 1, 3, 2, 0, 3, 1]))
// console.log(sortFourColorsOnePass([1, 0, 0, 0, 1, 3, 2, 0, 3, 1]))
console.log(sortFourColorsOnePass([2, 3, 2, 0, 3, 1]))