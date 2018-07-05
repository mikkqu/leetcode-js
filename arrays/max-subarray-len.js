
let maxSubArrayLen = (nums, k) => {
    let ans = 0
    let acc = 0
    let mp = {0: -1} // {value:index}

    for (let i = 0; i < nums.length; i++) {
        acc += nums[i]
        if (!mp.hasOwnProperty(acc)) {
            mp[acc] = i
        }

        if (mp.hasOwnProperty(acc - k)) {
            ans = Math.max(ans, i - mp[acc - k])
        }
    }

    return ans
}


let nums = [-2, -1, 2, 1]
console.log(maxSubArrayLen(nums, 1))