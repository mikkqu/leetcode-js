
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let flatten = (root) => {
    let prev = null

    let flatten = (root) => {
        if (root == null) { return }

        flatten(root.right)
        flatten(root.left)

        root.right = prev
        root.left = null

        prev = root
    }

    flatten(root)

    return root
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)

console.log(flatten(root))