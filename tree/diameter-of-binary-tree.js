function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let diameter = (root) => {
    let max = 0

    _maxDepth = (root) => {
        if (!root) { return 0 }

        let left = _maxDepth(root.left)
        let right = _maxDepth(root.right)

        max = Math.max(max, left + right)

        return Math.max(left, right) + 1
    }

    _maxDepth(root)

    return max
}

let diameterNoGlobal = (root) => {
    _maxDepth = (root) => {
        if (!root) { return [ 0, 0 ] }

        let left = _maxDepth(root.left)
        let right = _maxDepth(root.right)

        let height = Math.max(left[0], right[0]) + 1
        let max = Math.max(
            left[0] + right[0],
            Math.max(left[1], right[1])
        )

        return [ height, max ]
    }

    return _maxDepth(root)[1]
}

/*
    O(N ^ 2)
    Pay attention to 'lheight + rheight + 1'
    It counts number of nodes instead of num of edges
*/
let diameterN2 = (root) => {
    let height = (root) => {
        if (!root) { return 0 }

        return Math.max(height(root.left), height(root.right)) + 1
    }

    if (!root) { return 0 }

    let lheight = height(root.left)
    let rheight = height(root.right)

    let ldiameter = diameterN2(root.left)
    let rdiameter = diameterN2(root.right)

    return Math.max(
        lheight + rheight + 1,
        Math.max(ldiameter, rdiameter)
    )
}

/*
            1
          /   \
         2     3
        / \
       4   5
      /     \
     40      50

    Diameter: 40 -> 4 -> 2 -> 5 -> 50 = 4
*/

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.left.left = new TreeNode(40)
root.left.right = new TreeNode(5)
root.left.right.right = new TreeNode(50)
root.right = new TreeNode(3)

console.log(diameterN2(root))