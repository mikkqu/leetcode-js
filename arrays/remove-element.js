
let removeElement = (arr, val) => {
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] == val) {
            arr.splice(i, 1)
        }
    }

    return arr
}

console.log(removeElement([1, 2, 3, 3, 4], 3))