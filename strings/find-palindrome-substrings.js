let findPalindromesInSubstring = (input, j, k) => {
    let count = 0

    while (j >= 0 && k < input.length) {
        if (input[j] != input[k]) {
            break
        }

        console.log(input.substring(j, k + 1))
        count++
        j--
        k++
    }

    return count
}

let findPalindromeSubstrings = function(input) {
    let count = 0

    for (let i = 0; i < input.length; i++) {
        count += findPalindromesInSubstring(input, i - 1, i + 1)
        count += findPalindromesInSubstring(input, i, i + 1)
    }

    return count
}

console.log(findPalindromeSubstrings('aabbbaa'))