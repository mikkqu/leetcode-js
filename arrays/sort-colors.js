let sortColors = (nums) => {
    let l = 0
    let r = nums.length - 1

    let i = 0

    while (i <= r) {
        if (nums[i] === 0) {
            [ nums[i], nums[l] ] = [ nums[l], nums[i] ]
            l++
            i++
        } else if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            [ nums[i], nums[r] ] = [ nums[r], nums[i] ]
            r--
        }
    }

    return nums
}

console.log(sortColors([1, 0, 2, 0, 0, 1]))