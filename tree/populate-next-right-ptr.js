function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.next = null;
}

/*
    May be wrong
*/
let populateRight_2 = (root) => {
    if (root === null) { return }

    let pre = root
    let cur = null

    while (pre.left) {
        cur = pre
        while (cur) {
            console.log(cur.val)
            cur.left.next = cur.right
            if (cur.next) {
                cur.right.next = cur.next.left
            }
            cur = cur.next
        }

        pre = pre.left
    }
}

let populateRight = (root) => {
    if (root == null) { return }
    if (root.left == null && root.right == null) { return }
    if (root.left != null && root.right != null)
        root.left.next = root.right
    if (root.next != null)
        root.right.next = root.next.left

    populateRight(root.left);
    populateRight(root.right);
}

let head = new TreeNode(1)
head.left = new TreeNode(2)
head.right = new TreeNode(3)
head.left.left = new TreeNode(4)
head.left.right = new TreeNode(5)

populateRight(head)

console.log(head)