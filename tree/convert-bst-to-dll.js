
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let concatLists = (head1, head2) => {
    if (!head1) { return head2 }
    if (!head2) { return head1 }

    let tail1 = head1.left
    let tail2 = head2.left

    tail1.right = head2
    head2.left = tail1

    head1.left = tail2
    tail2.right = head1

    return head1
}

let convertToList = (root) => {
    if (!root) { return null }

    let list1 = convertToList(root.left)
    let list2 = convertToList(root.right)

    root.left = root.right = root

    let result = concatLists(list1, root)
    result = concatLists(result, list2)

    return result
}

let getList = (head) => {
    if (!head) { return [] }

    let r = []
    let temp = head

    while (true) {
        r.push(temp.val)
        temp = temp.right
        if (temp === head) {
            break
        }
    }

    return r
};

/*
                10
              /    \
             4     15
            / \    / \
           2   6  12  25
*/

let root = new TreeNode(10)
root.left = new TreeNode(4)
root.right = new TreeNode(15)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(6)
root.right.left = new TreeNode(12)
root.right.right = new TreeNode(25)

let head = convertToList(root)
console.log(getList(head))