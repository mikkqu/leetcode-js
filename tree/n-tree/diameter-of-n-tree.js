
class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

let diameterN2 = (root) => {
    let depth = (root) => {
        if (!root) { return 0 }

        let max = 0

        for (let ch of root.children) {
            max = Math.max(max, depth(ch))
        }

        return max + 1
    }

    if (!root) { return 0 }

    let max1 = 0
    let max2 = 0

    for (let ch of root.children) {
        let h = depth(ch)
        if (h > max1) {
            max2 = max1
            max1 = h
        } else if (h > max2) {
            max2 = h
        }
    }

    let maxChildDia = 0
    for (let ch of root.children) {
        maxChildDia = Math.max(maxChildDia, diameter(ch))
    }

    return Math.max(maxChildDia, max1 + max2)
}

let diameter = (root) => {
    let max = 0

    _maxDepth = (root) => {
        if (!root) { return 0 }

        let max1 = 0
        let max2 = 0

        for (let ch of root.children) {
            let h = _maxDepth(ch)
            if (h > max1) {
                max2 = max1
                max1 = h
            } else if (h > max2) {
                max2 = h
            }
        }

        max = Math.max(max, max1 + max2)

        return max1 + 1
    }

    _maxDepth(root)

    return max
}

/*
            1
          / | \
         2  3  4
           / \
          5   6
         /     \
        10     11
       /         \
      20         22
*/

let root = new Node(1, [
    new Node(2),
    new Node(3, [
        new Node(5, [
            new Node(10, [
                new Node(20)
            ])
        ]),
        new Node(6, [
            new Node(11, [
                new Node(22)
            ])
        ])
    ]),
    new Node(4)
])

console.log(diameter(root))