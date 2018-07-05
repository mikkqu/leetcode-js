let missingNumber = (nums) => {
    let sum = 0
    let expectedSum = nums.length

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
        expectedSum += i
    }

    return expectedSum - sum
};

console.log(missingNumber([0, 1, 2, 4, 5]))