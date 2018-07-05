
let swap = (arr, index1, index2) => {
    let tmp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = tmp
}

let printFreq = (arr) => {
    /* Print (values, number of occurences) in accending order */

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]) { console.log(`${i} ${arr[i]}`) }
    }
}

let countingSort = (arr) => {
    let aux = []
    let sorted = []

    for (let i = 0; i < arr.length; i++) {
        if (aux[arr[i]]) {
            aux[arr[i]]++
        } else {
            aux[arr[i]] = 1
        }
    }

    printFreq(aux)

    for (let i in aux) {
        while (aux[i] > 0) {
            sorted.push(parseInt(i));
            aux[i]--;
        }
    }

    return sorted
}

let arr = [3, 5, 2, 1, 4]
console.log(countingSort(arr))
