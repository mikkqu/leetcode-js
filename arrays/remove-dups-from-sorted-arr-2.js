let removeDuplicatesB = (nums) => {
    if (nums.length < 2) { return nums.length }

    if (nums.length > 1) {
        let count = 0
        let len = nums.length
        let i = 1

        while (nums[i] != undefined){
            if (nums[i] == nums[i - 1]) {
                count++
                nums.splice(i, 1)
            } else {
                i++
            }
        }

        return len - count
    }
};

let removeDuplicates = (nums) => {
    if (nums.length < 2) { return nums.length }

    for (let i = 2; i < nums.length;){
        if (nums[i - 2] == nums[i-1] &&
            nums[i - 1] == nums[i]) {
            nums.splice(i - 2, 1)
        } else {
            i++
        }
    }

    return nums.length
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))