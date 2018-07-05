let digitSquareSum = (n) => {
    let sum = 0, tmp;
    while (n) {
        tmp = n % 10;
        sum += tmp * tmp;
        n = Math.floor(n / 10);
    }

    return sum;
}

let isHappy = (n) => {
    let slow = n
    let fast = n

    do {
        slow = digitSquareSum(slow)
        fast = digitSquareSum(fast)
        fast = digitSquareSum(fast)
    } while (slow != fast)

    if (slow == 1) {
        return true
    } else {
        return false
    }
}

console.log(isHappy(19))