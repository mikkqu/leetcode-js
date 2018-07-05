// Input : {A:"B",C:{D:"E",F:{G:"H",I:"J"}}}
// Output :
// {
//     A:"B",
//     C:
//     {
//         D:"E",
//         F:
//         {
//             G:"H",
//             I:"J"
//         }
//     }
// }

let pp = (obj) => {
    let out = ''

    for (let key of obj) {

    }

    return out
}

let pp2 = (json) => {
    console.log(json.toString())
    let result = ''
    let tabCounter = 0
    let current = ''

    for (let i = 0; i < json.length; i++) {
        let c = json[i]

        switch(c) {
            case '{':
            case '[':
                if (current.length > 0) {
                    result += current + '\n'
                    current = ''
                }
                for (let j = 0; j < tabCounter; j++) {
                    current += ('\t')
                }
                current += (c)
                result += current + '\n'
                current = ''
                tabCounter++
                break

            case ']':
            case '}':
                if (current.length > 0) {
                    result += current + '\n'
                    current = ''
                }
                tabCounter--;
                for (let j=0; j<tabCounter; j++) {
                    current += '\t'
                }
                current += (c)
                break;

            case ',':
                current += (c)
                result += current + '\n'
                current = ''
                break;

            default:
                if (current.length == 0) {
                    for (let j=0; j < tabCounter; j++) {
                        current += ('\t')
                    }
                }
                current += (c)
        }
    }

    if (current.length > 0) {
        result += current
    }

    return result
}

var pp3 = (json) => {
        var result = ''
        var tabCounter = 0
        var current = ''

        for (var i = 0; i < json.length; i++) {
            var c = json[i]

            switch(c) {
                case '{':
                case '[':
                    if (current.length > 0) {
                        result += current + '\n'
                        current = ''
                    }
                    for (var j = 0; j < tabCounter; j++) {
                        current += ('\t')
                    }
                    current += (c)
                    result += current + '\n'
                    current = ''
                    tabCounter++
                    break;

                case ']':
                case '}':
                    if (current.length > 0) {
                        result += current + '\n'
                        current = ''
                    }
                    tabCounter--
                    for (var j=0; j<tabCounter; j++) {
                        current += '\t'
                    }
                    current += (c)
                    break

                case ',':
                    current += (c)
                    result += current + '\n'
                    current = ''
                    break

                default:
                    if (current.length == 0) {
                        for (var j=0; j < tabCounter; j++) {
                            current += ('\t');
                        }
                    }
                    current += (c);
            }
        }

        if (current.length > 0) {
            result += current
        }

        return result
}


let obj = '{"id":100,"firstName":"Jack","lastName":"Jones","age":12}'

console.log(pp3(obj))