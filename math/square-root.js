

let squareRoot = (num) => {
    let _squareRoot = (num, low, high) => {
        const EPS = 0.00001
        let mid = Math.floor((low + high) / 2)
        let sqr = mid * mid

        if (Math.abs(sqr - num) <= EPS) {
             return mid
        } else if (sqr < num) {
            return _squareRoot(num, mid, high)
        } else {
            return _squareRoot(num, low, mid)
        }
    };

    return _squareRoot(num, 0, 1 + Math.floor(num / 2))
};

console.log(squareRoot(12))
