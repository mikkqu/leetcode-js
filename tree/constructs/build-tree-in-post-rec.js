
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/*
    One solution
*/

let search = (arr, start, end, value) => {
    for (let i = start; i <= end; i++) {
        if (arr[i] == value) { return i }
    }

    return start
}

var buildTreeL = function(inarr, postarr) {
    let iObj = { 'index': inarr.length - 1 }

    _build = (inarr, postarr, inStart, inEnd, iObj) => {
        if (inStart > inEnd) { return null }

        let node = new TreeNode(postarr[iObj.index])
        iObj.index -= 1

        if (inStart === inEnd) { return node }

        let iIndex = search(inarr, inStart, inEnd, node.val)

        // console.log(inStart, inEnd, iObj.index, iIndex, node.val)

        node.right = _build(inarr, postarr, iIndex + 1, inEnd, iObj)
        node.left = _build(inarr, postarr, inStart, iIndex - 1, iObj)

        return node
    }

    return _build(inarr, postarr, 0, inarr.length - 1, iObj)
};

let inorder = [9, 3, 15, 20, 7]
let postorder = [9, 15, 7, 20, 3]

let tree = buildTree(inorder, postorder)
console.log(tree)