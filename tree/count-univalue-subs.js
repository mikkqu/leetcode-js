
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let countUnivalSubtrees = (root) => {
    let count = 0

    let helper = (node) => {
        if (node == null) { return true }

        let left = helper(node.left)
        let right = helper(node.right)

        if (left && right) {
            if (node.left && node.val != node.left.val) {
                return false
            }

            if (node.right && node.val != node.right.val) {
                return false
            }

            count++
            return true
        }

        return false
    }

    helper(root)

    return count
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)

console.log(countUnivalSubtrees(root))
