var threeSum = function(nums) {
    if (nums.length < 3) { return [] }

    let result = []

    nums.sort((x, y) => x - y)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) { return result }
        if (nums[i] == nums[i - 1]) { continue }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])

                right--
                left++

                while (left < right && nums[left] == nums[left - 1]) { left++ }
				while (left < right && nums[right] == nums[right + 1]) { right-- }
            }
        }
    }


    return result
};