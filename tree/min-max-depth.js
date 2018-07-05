
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let minDepthVerbose = (root) => {
    if (!root) { return 0 }

    let result

    let minHeight = (root, depth) => {
        if (!root.left && !root.right) {
            result = Math.min(result || depth, depth)
        }
        if (root.left) minHeight(root.left, depth + 1)
        if (root.right) minHeight(root.right, depth + 1)
    }

    minHeight(root, 1)

    return result
}

let minDepth = (root) => {
    if (!root) { return 0 }

    let l = minDepth(root.left)
    let r = minDepth(root.right)

    return 1 + (Math.min(l, r) || Math.max(l, r))
}

let maxDepth = (root) => {
    if (!root) { return 0 }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

let root = new TreeNode(15)
root.left = new TreeNode(13)
root.right = new TreeNode(20)
root.left.left = new TreeNode(10)
root.left.right = new TreeNode(11)
root.right.left = new TreeNode(17)
root.right.right = new TreeNode(22)

console.log(minDepth(root))