
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let isValidBST = (root, min = -Infinity, max = Infinity) => {
    if (!root) { return true }

    if (root.val <= min) { return false }
    if (root.val >= max) { return false }

    return isValidBST(root.left, min, root.val) &&
           isValidBST(root.right, root.val, max)
}

let head = new TreeNode(5)
head.left = new TreeNode(1)
head.right = new TreeNode(6)
head.right.left = new TreeNode(3)
head.right.right = new TreeNode(7)

console.log(isValidBST(head))