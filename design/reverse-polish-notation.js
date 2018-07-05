let evalRPN = (tokens) => {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b)
    };

    let stack = [];

    for (let n of tokens) {
        if (ops[n]) {
            let fn = ops[n]
            let b = stack.pop()
            let a = stack.pop()

            stack.push(fn(a, b))
        } else {
            stack.push(Number(n))
        }
    }

    return stack[0]
}

console.log(evalRPN([2, 4, '+']))