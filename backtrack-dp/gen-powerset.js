
let genPowersetBitwise = (arr) => {
    let out = []

    for (let i = 0; i < (1 << arr.length); i++) {
        let x = i
        let curr = []

        while (x) {
            let tar = Math.log2(x & ~(x - 1))

            curr.push(arr[tar])

            x &= x - 1
        }

        out.push(curr.slice())
    }

    return out
}

let genPowersetNull = (arr) => {
    let out = []

    let _recurse = (arr, subset, i) => {
        if (arr.length === i) {
            out.push(subset.slice())
            return
        }

        subset[i] = null
        _recurse(arr, subset, i + 1)

        subset[i] = arr[i]
        _recurse(arr, subset, i + 1)
    }

    _recurse(arr, [], 0)

    return out
}

let genPowersetIter = (arr) => {
    let temp = []
    let out = [[]]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < out.length; j++) {
            temp[j] = []
            temp[j].push(...out[j])
        }

        for (let j = 0; j < temp.length; j++) {
            temp[j].push(arr[i])
        }

        out.push(...temp)
    }

    return out
}

let genPowerset = (arr) => {
    let out = []

    let depth = arr.length

    let _recurse = (arr, curr, level) => {
        if (level === depth) {
            out.push(curr.slice())
            return
        }

        let upcurr = Array.from(curr)
        upcurr.push(arr[0])

        _recurse(arr.slice(1), curr, level + 1)
        _recurse(arr.slice(1), upcurr, level + 1)
    }

    _recurse(arr, [], 0)

    return out
}

console.log(genPowerset([1, 2, 3]))
console.log(genPowersetNull([1, 2, 3]))
console.log(genPowersetIter([1, 2, 3]))
console.log(genPowersetBitwise([1, 2, 3]))