let func = (x) => {
    return 2 * x * x - 12 * x + 7
}

let ts = (start, end) => {
    let l = start
    let r = end

    for (let i = 0; i < 200; i++) {
        let l1 = (l * 2 + r) / 3;
        let l2 = (l + 2 * r) / 3;

        if (func(l1) < func(l2)) {
            r = l2
        } else {
            l = l1
        }
    }

    let x = Math.round(l);

    return func(x);
}

console.log(ts(6, 8))