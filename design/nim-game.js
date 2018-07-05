let canWinNim = (n) => {
    return n <= 3 ? true : n % 4 !== 0
}

console.log(canWinNim(15))