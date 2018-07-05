
let printSubsets_n = (arr, tmp = []) => {
    let subset = []

    let helper = (arr, subset, i) => {
        if (arr.length === i) {
            console.log(subset)
            return
        } else {
            subset[i] = null
            helper(arr, subset, i + 1)

            subset[i] = arr[i]
            helper(arr, subset, i + 1)
        }
    }

    helper(arr, subset, 0)
}

let printSubsets = (arr) => {
    let depth = arr.length

    let _recurse = (arr, curr, level) => {
        if (level === depth) {
            console.log(curr)
            return
        }

        let upcurr = Array.from(curr)
        upcurr.push(arr[0])

        _recurse(arr.slice(1), curr, level + 1)
        _recurse(arr.slice(1), upcurr, level + 1)
    }

    _recurse(arr, [], 0)
}

printSubsets([1, 2, 3])