
let sum = (nums) => {
    let s = 0

    for (let i = 0; i < nums.length; i++) {
        s += nums[i]
    }

    return s
}

let pivotIndex = (nums) => {
    let S = sum(nums)
    let leftsum = 0

    for (let i = 0; i < nums.length; i++) {
        if (leftsum == (S - leftsum - nums[i])) {
            return i
        }

        leftsum += nums[i]
    }

    return -1
}


let nums = [1, 2, 3]
console.log(pivotIndex(nums))
