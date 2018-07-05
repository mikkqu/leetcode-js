function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

let closestValue = (root, target) => {
    var child = target < root.val ? root.left : root.right

    if (!child) { return root.val }

    let closest = closestValue(child, target)

    return Math.abs(closest - target) < Math.abs(root.val - target) ?
            closest : root.val
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(4)
root.right = new TreeNode(8)

console.log(closestValue(root, 6))