
let findDistance = (nums, k) => {
    nums.sort((x, y) => x - y)

    let lo = 0
    let hi = nums[nums.length - 1] - nums[0]

    while (lo < hi) {
        let mi = (lo + hi) >>> 1
        let count = 0
        let left = 0

        for (let right = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mi) { left++ }
            count += right - left
        }

        if (count >= k) {
            hi = mi
        } else {
            lo = mi + 1
        }
    }

    return lo
}

let nums = [1, 3, 1]
console.log(findDistance(nums, 1))