
let pickM = (arr, m) => {
    let subset = []

    for (let i = 0; i < m; i++) {
        subset[i] = arr[i]
    }

    for (let i = m; i < arr.length; i++) {
        let k = rand(0, i)
        if (k < m) {
            subset[k] = arr[i]
        }
    }

    return subset
}