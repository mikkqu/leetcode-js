
let radixSort = (array, radix = 10) => {
    let max = Math.max(...array)
    let mul = 1

    while (max) {
        countingSortByDigit(array, radix, mul);

        max = Math.floor(max / 10)
        mul *= 10
    }

    return array;
  }

let countingSortByDigit = (array, radix, exponent, minValue) => {
    let bucketIndex
    let buckets = new Array(radix)
    let output = new Array(array.length)

    for (let i = 0; i < radix; i++) { buckets[i] = 0 }

    // Count frequencies
    for (let i = 0; i < array.length; i++) {
        bucketIndex = Math.floor(((array[i]) / exponent) % radix)
        buckets[bucketIndex]++
    }

    // Compute cumulates
    for (let i = 1; i < radix; i++) { buckets[i] += buckets[i - 1] }

    // Move records
    for (let i = array.length - 1; i >= 0; i--) {
      bucketIndex = Math.floor(((array[i]) / exponent) % radix)
      output[--buckets[bucketIndex]] = array[i]
    }

    // Copy back
    for (let i = 0; i < array.length; i++) { array[i] = output[i] }

    console.log(output.join(' '))

    return array;
}


let arr = [170, 45, 75, 90, 802, 24, 2, 66]
console.log(radixSort(arr))

