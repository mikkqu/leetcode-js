
let permute = (arr) => {
    let list = []

    let backtrack = (currList) => {
        if (currList.length == arr.length) {
            return list.push(currList.slice())
        }

        for (let i = 0; i < arr.length; i++) {
            if (currList.includes(arr[i])) { continue }

            currList.push(arr[i])
            backtrack(currList);
            currList.pop()
        }
    }

    backtrack([]);

    return list;
};

let res = permute([1, 2, 3, 4])
console.log(res)
console.log(res.length)