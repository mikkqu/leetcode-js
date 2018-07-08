let productExceptSelf = (arr) => {
    let output = []
    let leftMult = 1
    let rightMult = 1

    for (let j = 0; j < arr.length; j++) {
        output[j] = leftMult
        leftMult *= arr[j]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[i] *= rightMult
        rightMult *= arr[i]
    }

    return output;
};


console.log(productExceptSelf([2, 3, 4, 5]))