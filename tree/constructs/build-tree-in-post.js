let buildTree = (inorder, postorder) => {
    if (inorder == null ||
        postorder == null ||
        inorder.length != postorder.length) {
            return null
    }

    let hash = {}

    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i
    }

    return buildTreePostIn(inorder, 0, inorder.length - 1,
                           postorder, 0, postorder.length - 1,
                           hash)
}

let buildTreePostIn = (inorder, is, ie, postorder, ps, pe, hash) => {
    if (ps > pe || is > ie) { return null }

    let root = new TreeNode(postorder[pe])
    let ri = hash[postorder[pe]]

    root.left = buildTreePostIn(inorder, is, ri - 1,
                                postorder, ps, ps + ri - is - 1,
                                hash)
    root.right = buildTreePostIn(inorder, ri + 1, ie,
                                 postorder, ps + ri - is, pe - 1,
                                 hash)

    return root
}

let inorder = [9, 3, 15, 20, 7]
let postorder = [9, 15, 7, 20, 3]

let tree = buildTree(inorder, postorder)
console.log(tree)