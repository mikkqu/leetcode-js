let multiply = (num1, num2) => {
    let m = num1.length
    let n = num2.length
    let pos = new Array(m + n).fill(0)

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul =
                (num1[i].charCodeAt() - '0'.charCodeAt()) *
                (num2[j].charCodeAt() - '0'.charCodeAt())

            let p1 = i + j
            let p2 = i + j + 1
            let sum = mul + pos[p2]

            pos[p1] += Math.floor(sum / 10)
            pos[p2] = (sum) % 10
        }
    }

    let sb = ''

    console.log(pos)

    for (let p of pos) {
        if (!(sb.length == 0 && p == 0)) sb += (p)
    }

    return sb.length == 0 ? "0" : sb
}

console.log(multiply('5', '6'))