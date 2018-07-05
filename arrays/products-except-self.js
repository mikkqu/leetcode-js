let productExceptSelf = (nums) => {
    let output = []
    let leftMult = 1
    let rightMult = 1

    for (let j = 0; j < nums.length; j++) {
        output[j] = leftMult
        leftMult *= nums[j]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightMult
        rightMult *= nums[i]
    }

    return output;
};


console.log(productExceptSelf([2, 3, 4, 5]))