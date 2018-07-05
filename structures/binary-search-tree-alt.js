
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, key) {
        if (node === null) {
            return null
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if (node.left === null & node.right === null) {
                node = null
                return node
            }

            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            let aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    getRootNode() {
        return this.root
    }

    search(node, data) {
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

    inorder(node) {
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

    getHeight(node) {
        if (node == null) return 0;

        return 1 + Math.max(this.getHeight(node.left),
                            this.getHeight(node.right));
    }
}

let test = () => {
    let bst1 = new BinarySearchTree()

//           15
//         /    \
//       10      25
//      /  \    /  \
//     7   13  22   27
//    / \     /
//   5   9   17

    bst1.insert(15)
    bst1.insert(25)
    bst1.insert(10)
    bst1.insert(7)
    bst1.insert(22)
    bst1.insert(17)
    bst1.insert(13)
    bst1.insert(5)
    bst1.insert(9)
    bst1.insert(27)

    let root = bst1.getRootNode()

    bst1.inorder(root)
    // bst1.preorder(root)
    // bst1.postorder(root)

    bst1.remove(5)
    bst1.remove(7)
    bst1.remove(15)

    bst1.inorder(root)

    console.log(bst1.getHeight(root))
}

// test()
