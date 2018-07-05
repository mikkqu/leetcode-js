function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let inorderRec = (root) => {
    let arr = []

    let inorder = (node) => {
        if (!node) { return }

        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }

    inorder(root)

    return arr
}

let successor = (root, p) => {
    if (!root) { return null }

    if (root.val <= p.val) {
        return successor(root.right, p)
    } else {
        let left = successor(root.left, p)
        return (left != null) ? left : root
    }
}

let predecessor = (root, p) => {
    if (!root) { return null }

    if (root.val >= p.val) {
        return predecessor(root.left, p)
    } else {
        let right = predecessor(root.right, p)
        return (right != null) ? right : root
    }
}

let successorIntuitive = (root, target) => {
    if (!root) { return null }

    let succ = null

    while (root) {
        if (root.val < target) {
            root = root.right
        } else if (root.val > target) {
            succ = root
            root = root.left
        } else {
            if (root.right) {
                root = root.right
                while (root.left) {
                    root = root.left
                }
                succ = root
            }

            break
        }
    }

    return succ
}

/*
                10
              /    \
             4     15
            / \    / \
           2   6  12  25
*/

let root = new TreeNode(10)
root.left = new TreeNode(4)
root.right = new TreeNode(15)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(6)
root.right.left = new TreeNode(12)
root.right.right = new TreeNode(25)

console.log(inorderRec(root))
console.log(successor(root, root.left.right).val)
console.log(successorIntuitive(root, 6).val)
