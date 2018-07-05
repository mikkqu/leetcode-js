let majorityElement = (nums) => {
    let count = 1

    if (nums.length == 0) { return -1 }

    let current = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i]
        if (cur != current) {
            --count
        } else {
            ++count
        }

        if (count == 0) {
            current = cur
            count = 1
        }
    }

    return current
}

console.log(majorityElement([1, 2, 2, 3, 4, 5]))