
class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

let preorderIt = (root) => {
    let out = []
    let stack = [root]

    while (stack.length) {
        let node = stack.pop()

        out.push(node.val)

        for (let item of node.children.reverse()) {
            stack.push(item)
        }
    }

    return out
}

let preorder = (root) => {
    let out = []

    let _preorder = (root) => {
        if (root === null) { return null }

        out.push(root.val)

        for (let node of root.children) {
            _preorder(node)
        }
    }

    _inorder(root)

    return out
}

let head = new Node(5, [
    new Node(1, [
        new Node(42)
    ]),
    new Node(2),
    new Node(3)
])

console.log(preorderIt(head))