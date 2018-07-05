let permuteUnique = (nums) => {
    let out = []
    let map = {}

    let util = (arr, iarr) => {
        if (arr.length === nums.length) {
            if (!map[arr]) {
                map[arr] = true
                out.push(arr.slice())
            }

            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (iarr.indexOf(i) >= 0) { continue }

            arr.push(nums[i])
            iarr.push(i)

            util(arr, iarr)

            arr.pop()
            iarr.pop()
        }
    }

    util([], [])

    return out
};

console.log(permuteUnique([1, 1, 2]))