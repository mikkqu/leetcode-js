
let isBadVersion = (n) => {
    if (n >= 1) {
        return true
    } else {
        return false
    }
}

let solution = (n) => {
    let left = 1
    let right = n

    while (left < right) {
        let m = Math.floor((left + right) / 2)

        if (isBadVersion(m)) {
            right = m
        } else {
            left = m + 1
        }
    }

    return left
}


console.log(solution(2))