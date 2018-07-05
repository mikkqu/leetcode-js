
let swap = (arr, index1, index2) => {
    let tmp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = tmp
}

let quickSort = (array, left, right, side) => {
    let leftIndex = partition(array, left, right);

    if (left < leftIndex - 1) { quickSort(array, left, leftIndex - 1, true); }
    if (right > leftIndex) { quickSort(array, leftIndex, right, false); }

    return array;
}

let partition = (array, left, right) => {
    /* Hoare partition scheme */
    var pivotIndex = Math.floor( (left + right) / 2);
    var pivot = array[pivotIndex];

    while (left <= right) {
        while (array[left] < pivot) { left++; }
        while (array[right] > pivot) { right--; }

        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    return left;
}

let arr = [9, 8, 7, 6, 5, 1, 2, 3, 4, 11, 12, 13]
console.log(quickSort(arr, 0, arr.length - 1))
