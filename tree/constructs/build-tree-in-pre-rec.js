
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let search = (arr, start, end, value) => {
    for (let i = start; i <= end; i++) {
        if (arr[i] == value) { return i }
    }
}

let buildTreeL = (inarr, preorder, inStart, inEnd) => {
    let iObj = { 'index': 0 }

    _build = (inarr, preorder, inStart, inEnd, iObj) => {
        if (inStart > inEnd) { return null }

        let node = new TreeNode(preorder[iObj.index])
        iObj.index += 1

        if (inStart === inEnd) { return node }

        let iIndex = search(inarr, inStart, inEnd, node.val)

        // console.log(inStart, inEnd, iObj.index, iIndex, node.val)

        node.left = _build(inarr, preorder, inStart, iIndex - 1, iObj)
        node.right = _build(inarr, preorder, iIndex + 1, inEnd, iObj)

        return node
    }

    return _build(inarr, preorder, 0, inarr.length - 1, iObj)
}

let preorder = [3, 1, 2, 4]
let inorder = [1, 2, 3, 4]

let tree = buildTree(inorder, preorder)
console.log(tree)