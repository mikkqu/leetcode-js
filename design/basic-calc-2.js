let calculate = (s) => {
    s = s.replace(/\s/g, '')

    let nums = []
    let num = 0
    let sign = '+'

    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        if (/\d/.test(c)) {
            num = num * 10 + Number(c)
        }

        if ((/\D/.test(c)) || i === s.length - 1) {
            if (sign === '-') { nums.push(-num) }
            if (sign === '+') { nums.push(num) }
            if (sign === '*') { nums.push(nums.pop() * num) }
            if (sign === '/') { nums.push(~~(nums.pop() / num)) }

            sign = c
            num = 0
        }
    }

    let res = 0

    for (let n of nums) {
        res += n
    }

    return res
}

console.log(calculate('5 * 5'))