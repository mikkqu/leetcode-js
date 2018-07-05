
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(node = null) {
        this.root = node
    }

    height(node = this.root) {
        if (node == null) { return 0 }

        return 1 + Math.max(
            this.height(node.left),
            this.height(node.right)
        )
    }

    /* Time: O(n^2) */
    diameter(node = this.root) {
        if (node == null) { return 0 }

        let lheight = this.height(node.left)
        let rheight = this.height(node.right)

        let ldiameter = this.diameter(node.left)
        let rdiameter = this.diameter(node.right)

        return Math.max(
            lheight + rheight + 1,
            Math.max(ldiameter, rdiameter)
        )
    }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

let tree = new BinaryTree(root)
console.log(tree.diameter())

