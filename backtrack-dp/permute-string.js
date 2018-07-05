
let permuteString = (string) => {
    let out = []

    let permute = (curr, index) => {
        if (index == string.length) {
            out.push(curr)
            return
        }

        let currCharCode = string[index].charCodeAt()
        let sMinus = String.fromCharCode(currCharCode - 1)
        let sEqual = String.fromCharCode(currCharCode)
        let sPlus = String.fromCharCode(currCharCode + 1)

        permute(curr + sMinus, index + 1)
        permute(curr + sEqual, index + 1)
        permute(curr + sPlus, index + 1)
    }

    permute('', 0)

    return out
}


console.log(permuteString('hi'))
