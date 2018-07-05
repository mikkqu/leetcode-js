// let s = new Set()

// s.add([1, 2])
// s.add([1, 2])

// console.log(s)
// console.log(s.has([1, 2]))

// let h = {}

// h[[1, 2]] = 1
// h[[1, 2]] = 2

// console.log(h)

let hash = {
    'a': 5,
    'b': 6
}

for (let [ key, value ] of Object.entries(hash)) {
    console.log(value)
}