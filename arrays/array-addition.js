
let add = (arr1, arr2) => {
    let l = Math.max(arr1.length, arr2.length) - 1

    let result = []
    let c = 0

    let i = arr1.length - 1
    let j = arr2.length - 1
    let r = 0

    while (i >= 0 && j >= 0) {
        r = arr1[i--] + arr2[j--] + c;
        c = Math.floor(r / 10);
        result[l--] = r % 10;
    }

    while (i >= 0) {
        r = arr1[i--] + c;
        c = Math.floor(r / 10);
        result[l--] = r % 10;
    }

    while (j >= 0) {
        r = arr2[j--] + c;
        c = Math.floor(r / 10);
        result[l--] = r % 10;
    }

    if (c != 0) {
        result.unshift(c)
    }

    return result;

}

let arr1 = [1, 2, 3]
let arr2 = [9, 3, 4]

console.log(add(arr1, arr2))