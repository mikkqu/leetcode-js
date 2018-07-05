
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let preorderRec = (root) => {
    let arr = []

    let preorder = (node) => {
        if (!node) { return }

        arr.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }

    preorder(root)

    return arr
}

let preorderIter = (root) => {
    if (!root) { return [] }

    let arr = []
    let stack = [ root ]

    while (stack.length) {
        let node = stack.pop()

        arr.push(node.val)

        if (node.right) { stack.push(node.right) }
        if (node.left) { stack.push(node.left) }
    }

    return arr
}

/*
                42
              /    \
             4      2
            / \    / \
           7   5  9   3

    Preorder:
        42 -> 4 -> 7 -> 5 -> 2 -> 9 -> 3
*/

let root = new TreeNode(42)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(3)

console.log(preorderRec(root))
console.log(preorderIter(root))

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

    Preorder: 1 -> 2 -> 3 -> 4 -> 5
*/

let head = new TreeNode(1)
head.left = new TreeNode(2)
head.left.left = new TreeNode(3)
head.left.left.right = new TreeNode(4)
head.left.left.right.left = new TreeNode(5)

console.log(preorderRec(head))
console.log(preorderIter(head))