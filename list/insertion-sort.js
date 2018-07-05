class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

let printList = (head) => {
    let vals = []

    while (head) {
        vals.push(head.val)
        head = head.next
    }

    console.log(vals.join(' -> '))
}

let sortedInsert = (head, node) => {
    if (!node) { return head }

    if (!head || node.val <= head.val) {
        node.next = head
        return node
    }

    let curr = head
    while (curr.next && curr.next.val < node.val) {
        curr = curr.next
    }

    node.next = curr.next
    curr.next = node

    return head
};

let insertionSort = (head) => {
    let sorted = null
    let curr = head

    while (curr) {
        let temp = curr.next
        sorted = sortedInsert(sorted, curr)
        curr = temp
    }

    return sorted
};

let n6 = new ListNode(10)
let n5 = new ListNode(5, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(4, n3)
let n1 = new ListNode(7, n2)

printList(n1)

let nn1 = insertionSort(n1, 3)

printList(nn1)