let permute = (nums) => {
    let list = []

    backtrack(list, [], nums);

    return list;
 }

let backtrack = (list, tempList, nums) => {
    if (tempList.length == nums.length) {
        return list.push(Array.from(tempList))
    }

    for (let i = 0; i < nums.length; i++) {
        if (tempList.includes(nums[i])) { continue }

        tempList.push(nums[i])
        backtrack(list, tempList, nums);
        tempList.pop()
    }
}

console.log(permute([1, 2, 3]))