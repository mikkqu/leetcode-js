
var combinationSum = (candidates, target) => {
    let backtrack = (list, tempList, nums, remain, start) => {
        if (remain < 0) {
            return;
        } else if (remain == 0) {
            list.push(Array.from(tempList));
        } else {
            for (let i = start; i < nums.length; i++){
                tempList.push(nums[i]);
                backtrack(list, tempList, nums, remain - nums[i], i); // not i + 1 because we can reuse same elements
                tempList.pop()
            }
        }
    }

    let list = []

    candidates.sort((x, y) => x - y)

    backtrack(list, [], candidates, target, 0)

    return list;
}

let nums = [2, 3, 6, 7]
let target = 7