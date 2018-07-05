
class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

let serializeTree = (root) => {
    let out = []

    let _serialize = (node) => {
        if (node === null) { return }

        out.push(node.val)

        for (let ch of node.children) {
            _serialize(ch)
        }

        out.push('#')
    }

    _serialize(root)

    return out
}


let deserializeTree = (arr) => {
    let i = 0

    let _deserialize = (arr) => {
        if ((arr.length === i) || arr[i] == '#') {
            i++
            return -1
        }

        let root = new Node(arr[i++])

        while (true) {
            let n = _deserialize(arr)
            if (n === -1) { break }

            root.children.push(n)
        }

        return root
    }

    return _deserialize(arr)
}


let head = new Node(1, [
    new Node(2),
    new Node(3, [
        new Node(5),
        new Node(6)
    ]),
    new Node(4)
])

let s = serializeTree(head)
console.log(s)

let r = deserializeTree(s)
console.log(r)