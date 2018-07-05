
let findAbcd = (arr) => {
    if (arr.length < 4) { return [] }

    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            for (let k = 0; k < arr.length - 1; k++) {
                for (let l = 0; l < arr.length; l++) {
                    if (i == k || i == j || i == l) { continue }
                    if (j == k || j == l) { continue }
                    if (k == l) { continue }

                    if (arr[i] + arr[j] == arr[k] + arr[l]) {
                        return [i, j, k, l]
                    }
                }
            }
        }
    }

    return []
}

let findAbcdHash = (arr) => {
    if (arr.length < 4) { return [] }

    let out = []
    let hash = {}

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]

            if (hash[sum]) {
                let prev = hash[sum]

                if (prev[0] == i || prev[0] == j) { continue }
                if (prev[1] == i || prev[1] == j) { continue }

                out.push([prev[0], prev[1], i, j])
            } else {
                hash[sum] = [i, j]
            }
        }
    }

    out.sort((x, y) => {
        let [ x0, y0 ] = [ x[0], y[0] ]
        let [ x1, y1 ] = [ x[1], y[1] ]
        let [ x2, y2 ] = [ x[2], y[2] ]
        let [ x3, y3 ] = [ x[3], y[3] ]

        if (x0 - y0 == 0) {
            if (x1 - y1 == 0) {
                if (x2 - y2 == 0) {
                    return x3 - y3
                }
                return x2 - y2
            }
            return x1 - y1
        }
        return x0 - y0
    })

    console.log(out)

    return out[0]
}

console.log(findAbcdHash([3, 4, 7, 1, 2, 9, 8]))
// console.log(findAbcdHash([0, 0, 1, 0, 2, 1]))
// console.log(findAbcdHash([1, 3, 3, 3, 3, 2, 2]))
// console.log(findAbcdHash([ 9, 5, 4, 9, 3, 6, 8, 7, 1, 2, 8, 7, 2, 9, 7, 1, 3, 9, 7, 8, 1, 0, 5, 5 ]))