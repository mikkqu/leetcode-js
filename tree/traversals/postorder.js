
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let postorderRec = (root) => {
    let arr = []

    let postorder = (node) => {
        if (!node) { return }

        postorder(node.left)
        postorder(node.right)
        arr.push(node.val)
    }

    postorder(root)

    return arr
}

let postorderIter = (root) => {
    if (!root) { return [] }

    let arr = []
    let stack1 = [ root ]
    let stack2 = []

    while (stack1.length) {
        let node = stack1.pop()

        stack2.push(node)

        if (node.left) { stack1.push(node.left) }
        if (node.right) { stack1.push(node.right) }
    }

    while (stack2.length) {
        let node = stack2.pop()
        arr.push(node.val)
    }

    return arr
}

/*
                42
              /    \
             4      2
            / \    / \
           7   5  9   3

    Postorder:
        7 -> 5 -> 4 -> 9 -> 3 -> 2 -> 42
*/

let root = new TreeNode(42)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(3)

console.log(postorderRec(root))
console.log(postorderIter(root))

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

    Postorder: 5 -> 4 -> 3 -> 2 -> 1
*/

let head = new TreeNode(1)
head.left = new TreeNode(2)
head.left.left = new TreeNode(3)
head.left.left.right = new TreeNode(4)
head.left.left.right.left = new TreeNode(5)

console.log(postorderRec(head))
console.log(postorderRec(head))