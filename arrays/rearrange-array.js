
let rearrange = (arr) => {
    let n = arr.length

    for (let i = 0; i < n; i++) {
        arr[i] += (arr[arr[i]] % n) * n
    }

    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / n)
    }

    return arr
}

let arr = [3, 2, 0, 1]

console.log(rearrange(arr))