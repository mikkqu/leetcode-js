
let plusOne = (A) => {
    let n = A.length - 1

    A[n] = A[n] + 1

    for (let i = n; i > 0 && A[i] == 10; i--) {
        A[i] = 0
        A[i - 1] = A[i - 1] + 1
    }

    if (A[0] == 10) {
        A[0] = 0
        A.unshift(1)
    }

    return A
}

let a = [1, 2, 9]
console.log(plusOne(a))