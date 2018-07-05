let validPalindrome = (s) => {
    for (let i = 0; i < (s.length / 2); i++) {
        let j = s.length - i - 1

        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) ||
                   isPalindrome(cut(s, j))
        }
    }
    return true
};

let cut = (s, i) => {
    return s.substr(0, i) + s.substr(i + 1)
}

let isPalindrome = (s) => {
    return (s === s.split('').reverse().join(''))
}

console.log(validPalindrome('cat'))