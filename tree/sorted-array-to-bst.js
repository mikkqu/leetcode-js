function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let inorderRec = (root) => {
    let arr = []

    let inorder = (node) => {
        if (!node) { return }

        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }

    inorder(root)

    return arr
}

let createBstFromArray = (arr) => {
    if (!arr || !arr.length) { return }

    let mid = Math.floor(arr.length / 2)

    let root = new TreeNode(arr[mid])

    root.left = createBstFromArray(arr.slice(0, mid))
    root.right = createBstFromArray(arr.slice(mid + 1))

    return root
}


let arr = [2, 3, 5, 7, 10]
let root = createBstFromArray(arr)

console.log(inorderRec(root))