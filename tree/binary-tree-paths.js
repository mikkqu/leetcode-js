
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let binaryTreePaths = (root) => {
    let paths = []
    let path = []

    let _inorder = (root) => {
        if (root === null) { return }

        path.push(root.val)

        if ((root.left === null) && (root.right === null)) {
            paths.push(Array.from(path))
        }

        _inorder(root.left)
        _inorder(root.right)

        path.pop()
    }

    _inorder(root)

    let outStr = paths.map((path) => path.join('->'))

    return outStr
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)

console.log(binaryTreePaths(root))