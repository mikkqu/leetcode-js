
class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

let convertToBinary = (node) => {
    return _convertToBinary(node, 1)
}

let _convertToBinary = (root, isLeft) => {
    if (!root) { return }

    let node = new Node(root.val)
    let lastnode = node

    for (let ch of root.children) {
        if (isLeft === 1) {
            lastnode.left = _convertToBinary(ch, 0)
            lastnode = lastnode.left
        } else {
            lastnode.right = _convertToBinary(ch, 1)
            lastnode = lastnode.right
        }
    }

    return node
}

let convertFromBinary = (node) => {
    return _convertFromBinary(node, 1)
}

let _convertFromBinary = (node, isLeft) => {
    if (!node) { return }

    let nnode = new Node(node.val)
    let temp = node

    if (isLeft === 1) {
        while (temp.left) {
            let child = _convertFromBinary(temp.left, 0)
            nnode.children.push(child)
            temp = temp.left
        }
    } else {
        while (temp.right) {
            let child = _convertFromBinary(temp.right, 1)
            nnode.children.push(child)
            temp = temp.right
        }
    }

    return nnode
}

let head = new Node(1, [
    new Node(2),
    new Node(3, [
        new Node(5),
        new Node(6)
    ]),
    new Node(4)
])


let binaryTree = convertToBinary(head)
let nTree = convertFromBinary(binaryTree)

console.log(nTree)

