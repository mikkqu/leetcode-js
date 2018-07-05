
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let isSameTree = (p, q) => {
    if (p === null && q === null) { return true }

    if (p !== null && q === null) { return false }
    if (q !== null && p === null) { return false }
    if (p.val !== q.val) { return false }

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};

let rootA = new TreeNode(1)
rootA.left = new TreeNode(4)
rootA.right = new TreeNode(2)
rootA.left.left = new TreeNode(7)

let rootB = new TreeNode(1)
rootB.left = new TreeNode(4)
rootB.right = new TreeNode(2)
rootB.left.left = new TreeNode(7)

console.log(isSameTree(rootA, rootB))