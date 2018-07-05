function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

class BSTIterator {
    constructor(root) {
        this.stack = []
        this.pushAll(root)
    }

    hasNext() {
        return this.stack.length
    }

    next() {
        let node = this.stack.pop()
        this.pushAll(node.right)

        return node.val
    }

    pushAll(node) {
        while (node) {
            this.stack.push(node)
            node = node.left
        }
    }

    getAll() {
        let out = []

        while (this.hasNext()) {
            out.push(this.next())
        }

        return out
    }
}

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

let it = new BSTIterator(root)
console.log(it.getAll())