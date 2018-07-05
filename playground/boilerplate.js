function main(input) {
    let lines = input.split('\n')
    let arr = lines[1].split(' ').map((item) => parseInt(item))

    doSomething(arr)
}