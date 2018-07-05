
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let lowestCommonAncestor = (root, p, q) => {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root;
    }
}

let root = new TreeNode(15)
root.left = new TreeNode(13)
root.right = new TreeNode(20)
root.left.left = new TreeNode(10)
root.left.right = new TreeNode(11)
root.right.left = new TreeNode(17)
root.right.right = new TreeNode(22)

console.log(lowestCommonAncestor(root, root.left, root.left.right))