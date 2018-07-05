let buildTree = (inorder, preorder) => {
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

let preorder = [3, 1, 2, 4]
let inorder = [1, 2, 3, 4]

let tree = buildTree(inorder, preorder)
console.log(tree)