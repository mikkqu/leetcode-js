
let permute = (nums) => {
    let list = []

    let backtrack = (currList = []) => {
        if (currList.length == nums.length) {
            return list.push(Array.from(currList))
        }

        for (let i = 0; i < nums.length; i++) {
            if (currList.includes(nums[i])) { continue }

            currList.push(nums[i])
            backtrack(currList);
            currList.pop()
        }
    }

    backtrack();

    return list;
};

console.log(permute([1, 3, 2]))