
let splitArray = (nums, m) => {
    let l = 0
    let r = 0

    let n = nums.length

    for (let i = 0; i < n; i++) {
        r += nums[i]

        if (l < nums[i]) {
            l = nums[i]
        }
    }

    let ans = r

    while (l <= r) {
        let mid = (l + r) >> 1
        let sum = 0
        let cnt = 1

        for (let i = 0; i < n; i++) {
            if (sum + nums[i] > mid) {
                cnt++
                sum = nums[i]
            } else {
                sum += nums[i]
            }
        }

        if (cnt <= m) {
            ans = Math.min(ans, mid)
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return ans
}


let splitArrayBrute = (arr, m) => {
    let dfs = (arr, i, cntSubarrays, curSum, curMax) => {
        console.log(i, cntSubarrays, curSum, curMax)

        if (i === arr.length && cntSubarrays === m) {
            ans = Math.min(ans, curMax)
        }
        if (i === arr.length) { return }

        if (i > 0) {
            console.log('>same', i, cntSubarrays, curSum, curMax)
            dfs(arr, i + 1, cntSubarrays, curSum + arr[i],
                Math.max(curMax, curSum + arr[i]))
        }

        if (cntSubarrays < m) {
            console.log('>new', i, cntSubarrays, curSum, curMax)
            dfs(arr, i + 1, cntSubarrays + 1, arr[i],
                Math.max(curMax, arr[i]));
        }
    }

    let ans = Number.MAX_SAFE_INTEGER

    dfs(arr, 0, 0, 0, 0)

    return ans
}

let arr = [7, 2, 4]
let m = 2

console.log(splitArray(arr, m))