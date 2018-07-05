
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let invertTree = (root) => {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }

    return root
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)

console.log(invertTree(root))