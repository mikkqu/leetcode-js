function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let serialize = (root) => {
    let out = []

    let preorder = (node) => {
        if (!node) {
            out.push('N')
            return
        }

        out.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }

    preorder(root)

    return out
};

let deserialize = (nodes) => {
    let i = 0

    let unwind = (nodes) => {
        if (i == nodes.length || nodes[i] == 'N') {
            i++
            return null
        }

        let root = new TreeNode(nodes[i++])

        root.left = unwind(nodes)
        root.right = unwind(nodes)

        return root
    }

    return unwind(nodes)
};


/*
            1
          /   \
         2     3
        / \
       4   5
      /   / \
     40  45  50
*/

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.left.left = new TreeNode(40)
root.left.right = new TreeNode(5)
root.left.right.left = new TreeNode(45)
root.left.right.right = new TreeNode(50)
root.right = new TreeNode(3)

let serTree = serialize(root)
let tree = deserialize(serTree)

console.log(serTree)
console.log(tree)