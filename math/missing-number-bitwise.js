let missingNumber = (nums) => {
    let ret = 0

    for (let i = 0; i < nums.length; i++) {
        ret ^= i
        ret ^= nums[i]
    }

    return ret ^= nums.length
}

console.log(missingNumber([0, 1, 3]))