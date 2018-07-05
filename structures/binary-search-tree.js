class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(node = null) {
        this.root = node
    }

    insertValue(data) {
        let node = new Node(data)

        if (this.root === null) {
            this.root = node
        } else {
            this._insertNode(this.root, node)
        }
    }

    _insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node
            } else {
                this._insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this._insertNode(root.right, node)
            }
        }
    }

    search(data, node = this.root) {
        if (node === null) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        } else {
            return node
        }
    }

    inorder(node = this.root) {
        let _inorder = (node, arr) => {
            if (node !== null) {
                _inorder(node.left, arr);
                arr.push(node.data);
                _inorder(node.right, arr);
            }

            return arr
        }

        let arr = _inorder(node, [])
        console.log(arr)
    }

    preorder(node) {
        let _preorder = (node, arr) => {
            if (node != null) {
                arr.push(node.data);
                _preorder(node.left, arr);
                _preorder(node.right, arr);
            }

            return arr
        }

        let arr = _preorder(node, [])
        console.log(arr)
    }

    postorder(node) {
        let _postorder = (node, arr) => {
            if (node != null) {
                _postorder(node.left, arr);
                _postorder(node.right, arr);
                arr.push(node.data);
            }

            return arr
        }

        let arr = _postorder(node, [])
        console.log(arr)
    }
}

let bst = new BST(new Node(50))

bst.insertValue(20)
bst.insertValue(30)
bst.insertValue(60)

bst.inorder()