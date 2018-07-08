let subsetsWithDup = (nums) => {
    nums.sort((a, b) => a - b)

    let res = []

    let _gen = (len, start, arr) => {
        if (arr.length == len) {
            res.push(arr.slice())
            return
        }

        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i - 1] === nums[i]) {
                continue
            }

            arr.push(nums[i])
            _gen(len, i + 1, arr)
            arr.pop()
        }
    }

    for (let len = 0; len <= nums.length; len++) {
        _gen(len, 0, [])
    }

    return res
}

console.log(subsetsWithDup([1, 2, 2, 3]))