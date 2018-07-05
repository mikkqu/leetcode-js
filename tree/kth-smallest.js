
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let kthSmallest = (root, k) => {
    let stack = []
    let count = 0
    let node = root

    while (true){
        if (node){
            stack.push(node)
            node = node.left
        } else {
            if (stack.length == 0) { break }
            node = stack.pop()
            count += 1
            if (count == k) { return node.val }
            node = node.right
        }
    }
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(2)
root.left.left = new TreeNode(7)

console.log(kthSmallest(root, 2))