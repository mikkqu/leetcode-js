
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/*
    printAllLevels: O(n^2) in time
*/

let height = (node) => {
    if (node === null ) { return 0 }

    return Math.max(height(node.left), height(node.right)) + 1
}

let printAllLevels = (root) => {
    let h = height(root)
    let arr = []

    for (let i = 1; i <= h; i++) {
        let t = printAtLevel(root, i)
        arr = arr.concat(t)
    }

    return arr
}

let printAtLevel = (root, level) => {
    let arr = []

    let _traverseLevel = (root, level) => {
        if (root === null) { return [] }

        if (level === 1) {
            arr.push(root.val)
        } else {
            _traverseLevel(root.left, level - 1)
            _traverseLevel(root.right, level - 1)
        }
    }

    _traverseLevel(root, level)

    return arr
}

var breadthFirst = function(root) {
    if (!root) { return [] }

    let arr = []
    let queue = [ root ]

    while (queue.length) {
        let node = queue.shift()

        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }

        arr.push(node.val)
    }

    return arr
}

let root = new TreeNode(6)
root.left = new TreeNode(4)
root.right = new TreeNode(10)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(5)

console.log(breadthFirst(root))
console.log(printAtLevel(root, 3))
console.log(printAllLevels(root))