let numSquares = (n) => {
    let map = [0]

    for (let i = 1; i <= n; i++) {
        let j = 1
        let min = i

        while (j * j <= i) {
            min = Math.min(min, 1 + map[i - j * j])
            j++
        }

        map[i] = min
    }

    return map[n]
}

console.log(numSquares(15))