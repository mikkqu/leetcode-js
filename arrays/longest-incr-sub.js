let lengthOfLIS = (nums) => {
    if (!nums.length) { return 0 }

    let dp = [ nums[0] ]

    for (let i = 1; i < nums.length; i++) {
        let min = 0
        let max = dp.length

        while (max > min) {
            mid = ~~((min + max) / 2)

            if (dp[mid] < nums[i]) {
                min = mid + 1
            } else {
                max = mid
            }
        }

        dp[max] = nums[i]
    }

    return dp.length
}

console.log(lengthOfLIS([1, 2, 0, 1, 2, 3, 4, 0, 1, 2, 3]))