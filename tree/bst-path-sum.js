
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let pathSum = (root, sum) => {
    let helper = (root, sum, solution, result) => {
        if (!root) { return result }

        solution.push(root.val)

        if (!root.left && !root.right && root.val === sum) {
            result.push(solution.slice())
        }

        helper(root.left, sum - root.val, solution, result)
        helper(root.right, sum - root.val, solution, result)

        solution.pop()

        return result
    }

    return helper(root, sum, [], [])
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)

console.log(pathSum(root, 7))