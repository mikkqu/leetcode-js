
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

let inorderIter = (root) => {
    if (!root) { return [] }

    let arr = []
    let stack = []

    while (root) {
        stack.push(root);
        root = root.left;
    }

    while (stack.length) {
        let node = stack.pop()

        arr.push(node.val)
        node = node.right

        while (node) {
            stack.push(node);
            node = node.left;
        }
    }

    return arr
}

/*
                42
              /    \
             4      2
            / \    / \
           7   5  9   3

    Inorder:
        7 -> 4 -> 5 -> 42 -> 9 -> 2 -> 3
*/

let root = new TreeNode(42)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(3)

console.log(inorderRec(root))
console.log(inorderIter(root))

/*
                1
               /
              2
             /
            3
             \
              4
             /
            5

    Inorder: 3 -> 5 -> 4 -> 2 -> 1
*/

let head = new TreeNode(1)
head.left = new TreeNode(2)
head.left.left = new TreeNode(3)
head.left.left.right = new TreeNode(4)
head.left.left.right.left = new TreeNode(5)

console.log(inorderRec(head))
console.log(inorderIter(head))