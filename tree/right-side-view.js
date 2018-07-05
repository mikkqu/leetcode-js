
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let rightSideView = (root) => {
    let helper = (current, stage, ret) => {
        if (!current) { return }

        helper(current.right, stage + 1, ret)

        if (!ret[stage]) {
            ret[stage] = current.val
        }

        helper(current.left, stage + 1, ret)
    }

    let ret = []

    helper(root, 0, ret)

    return ret
}

let head = new TreeNode(1)
head.left = new TreeNode(2)
head.right = new TreeNode(3)
head.left.left = new TreeNode(4)
head.left.right = new TreeNode(5)

console.log(rightSideView(head))