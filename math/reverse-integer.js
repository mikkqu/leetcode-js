
let reverse = (x) => {
    let reverse = parseInt(x.toString().split('').reverse().join(''))

    if (reverse > Math.pow(2,31)) { return 0 }

    return reverse * Math.sign(x)
}

console.log(reverse(120))