
class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

let height = (root) => {
    if (root === null) { return 0 }

    let h = 0

    for (let ch of root.children) {
        h = Math.max(h, height(ch))
    }

    return h + 1
}

let levelOrder = (root) => {
    let out = []

    let _levelOrder = (root, level) => {
        if (root === null) { return 0 }

        if (out[level] === undefined) {
            out[level] = [root.val]
        } else {
            out[level].push(root.val)
        }

        for (let item of root.children) {
            _levelOrder(item, level + 1)
        }
    }

    _levelOrder(root, 0)

    return out
}

let head = new Node(1, [
    new Node(2),
    new Node(3, [
        new Node(42)
    ]),
    new Node(4)
])

//console.log(levelOrder(head))
console.log(height(head))