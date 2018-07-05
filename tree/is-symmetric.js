
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let isMirror = (t1, t2) => {
    if (t1 == null && t2 == null) return true
    if (t1 == null || t2 == null) return false

    return (t1.val == t2.val)
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right)
}

let isSymmetric = (root) => {
   return isMirror(root, root)
}

let isSymmetricIter = (root) => {
    let q = [root, root]

    while (q.length) {
        let t1 = q.pop()
        let t2 = q.pop()

        if (t1 == null && t2 == null) { continue }
        if (t1 == null || t2 == null) { return false }
        if (t1.val != t2.val) { return false }

        q.push(t1.left, t2.right)
        q.push(t1.right, t2.left)
    }
}

let root = new TreeNode(6)
root.left = new TreeNode(4)
root.right = new TreeNode(4)
root.left.left = new TreeNode(3)
root.right.right = new TreeNode(3)

console.log(isSymmetric(root))