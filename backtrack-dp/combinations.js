let combine = (n, k) => {
    let out = []

    let _combine = (subArr, start) => {
        if (subArr.length === k) {
            out.push(subArr.slice())
        }

        for (let i = start; i <= n; i++) {
            subArr.push(i)
            _combine(subArr, i + 1)
            subArr.pop()
        }
    }

    _combine([], 1)

    return out
};

console.log(combine(3, 2))