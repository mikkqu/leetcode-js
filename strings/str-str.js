/*
    K-M-P for O(n)
*/


/*
    O(N^2)
*/
let strStr = (haystack, needle) => {
    if (!haystack.length && !needle.length) { return 0 }
    if (!haystack.length) { return -1 }
    if (!needle.length) { return 0 }

    for (let i = 0; ; i++) {
        for (let j = 0; ; j++) {
            if (j == needle.length) { return i }
            if (i + j == haystack.length) { return -1 }

            if (needle[j] != haystack[i + j]) { break }
        }
    }
};

console.log(strStr('a', 'a'))