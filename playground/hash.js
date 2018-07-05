
let obj = [
    ['John', 'Good'],
    ['John', 'Red'],
    ['John', 'Green'],
    ['Mike', 'Orange'],
    ['Raf', 'Sharp']
]

let out = obj.reduce((acc, item) => {
    let [name, value] = item

    if (!acc.hasOwnProperty(name)) {
        acc[name] = [value]
    } else {
        acc[name].push(value)
    }

    return acc
}, {})

let convert = (obj) => {
    let out = {}

    for (let item of obj) {
        let name = item[0]
        let value = item[1]

        if (!out.hasOwnProperty(name)) {
            out[name] = [value]
        } else {
            out[name].push(value)
        }
    }

    return out
}


console.log(out)