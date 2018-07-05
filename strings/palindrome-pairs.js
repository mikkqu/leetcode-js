
let findPairs = (words) => {
    let out = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) { continue }

            let concat = (words[i] + words[j])
            let reversed = concat.split('').reverse().join('')

            // console.log(concat, reversed)
            if (concat === reversed) {
                out.push( [i, j] )
            }
        }
    }

    return out
}

let words = ['bat', 'tab', 'cat']
console.log(findPairs(words))