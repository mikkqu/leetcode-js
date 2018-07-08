
let removeDuplicates = (arr) => {
    if (arr.length < 2) { return arr.length }

    for (let i = 1; arr[i] != undefined; i++){
        if (arr[i] == arr[i - 1]) {
            arr.splice(i--, 1)
        }
    }

    return arr.length
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))