let generate = (numRows) => {
    let outputs = []

    for (let i = 0; i < numRows; i++) {
        let curArr = [i]

        curArr[0] = 1
        curArr[i] = 1

        for (let j = 1; j < i; j++) {
            curArr[j] = outputs[i - 1][j - 1] + outputs[i - 1][j]
        }

        outputs.push(curArr)
    }

    return outputs
}

console.log(generate(4))