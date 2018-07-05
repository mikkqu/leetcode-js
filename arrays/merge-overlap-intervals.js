
let mergeIntervals = (input) => {
    if (!input || input.length == 0) { return }

    let out = [ input[0] ]

    for (let i = 0; i < input.length; i++) {
        let [ x1, y1 ] = input[i]
        let [ x2, y2 ] = out[out.length - 1]

        if (y2 >= x1) {
            out[out.length - 1][1] = Math.max(y1, y2)
        } else {
            out.push([x1, y1])
        }
    }

    return out
}

let intervals = [
    [1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]
]

console.log(mergeIntervals(intervals))