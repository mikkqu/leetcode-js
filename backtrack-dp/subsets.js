let subsets = (nums) => {
    let arr = []
    let res = [[]]

    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < res.length; j++) {
            arr[j] = []
            arr[j].push(...res[j])
        }

        for (let j = 0; j < arr.length; j++) {
            arr[j].push(nums[i])
        }

        res.push(...arr)
    }

    return res
}

console.log(subsets([1, 2, 3]))