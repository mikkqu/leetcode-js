
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var hasPathSum_w = function(root, sum) {
    let curr = 0
    let found = false

    preorder = (root, sum, curr) => {
        if (!root) { return }

        curr += root.val

        let isLeaf = ((root.left == null) && (root.right == null))

        if ((curr === sum) && isLeaf) {
            found = true
        }

        preorder(root.left, sum, curr)
        preorder(root.right, sum, curr)

        curr -= root.val
    }

    preorder(root, sum, curr)

    return found
}

let hasPathSum = (root, sum) => {
    if (root === null) { return false }

    if (root.left == null &&
        root.right == null &&
        sum - root.val == 0) {
            return true
    }

    return hasPathSum(root.left, sum - root.val) ||
           hasPathSum(root.right, sum - root.val)
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

console.log(hasPathSum(root, 4))