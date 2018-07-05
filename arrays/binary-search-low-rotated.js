

let search = (arr) => {
    if (arr.length == 1) { return arr[0] }

    let l = 1
    let r = arr.length - 1

    while (l <= r) {
        let m = (l + r) >>> 1

        console.log(l, m, r)

        if (m == 0 || m == arr.length - 1) {
            return arr[0]
        } else if (arr[m] < arr[m - 1]) {
            return arr[m]
        } else if (arr[m] > arr[0]) {
            l = m + 1
        } else {
            r = m
        }
    }

}

console.log(search([ 1, 2, 3 ]))