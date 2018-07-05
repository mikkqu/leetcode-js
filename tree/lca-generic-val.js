
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let lowestCommonAncestor = (root, p, q) => {
    let pc = 0
    let qc = 0

    let _lca = (root, p, q) => {
        if (!root) { return null }

        if (root.val == p) { pc++ }
        if (root.val == q) { qc++ }

        let left = _lca(root.left, p, q)
        let right = _lca(root.right, p, q)

        if (root.val == p || root.val == q) { return root }
        return (left && right) ? root : (left || right)
    }

    let node = _lca(root, p, q)

    if (!node || !pc || !qc) { return -1 }

    return node.val
}

let root = new TreeNode(3)
root.left = new TreeNode(5)
root.right = new TreeNode(1)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

console.log(lowestCommonAncestor(root, 2, 6))
