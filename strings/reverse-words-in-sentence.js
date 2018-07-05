
let reverseWords = (str) => {
    if (!str || !str.length) { return }

    str = str.split('')

    let reverse = (str, start, end) => {
        while (start < end) {
            let temp = str[start]
            str[start] = str[end]
            str[end] = temp

            start++
            end--
        }
    };

    reverse(str, 0, str.length - 1)

    let start = 0
    let end = 0

    while (true) {
        while (str[start] === ' ') { start++ }

        if (start == str.length) { break }

        end = start + 1
        while (end < str.length && str[end] != ' ') { end++ }

        reverse(str, start, end - 1)

        start = end
    }

    return str.join('')
}


console.log(reverseWords('Hello World!'));