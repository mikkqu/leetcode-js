
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

let swapPairs = (head) => {
    if (!head || !head.next) { return head }

    let node = head
    let prev = null
    let newHead = null

    while (node && node.next) {
        let next = node.next.next

        let a = node
        let b = node.next

        b.next = a
        a.next = next

        if (prev !== null) { prev.next = b }
        if (newHead === null) { newHead = b }

        prev = a
        node = next
    }

    return newHead
}

let n6 = new ListNode(10)
let n5 = new ListNode(9, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(7, n4)
let n2 = new ListNode(6, n3)
let n1 = new ListNode(5, n2)

printList(n1)
let nn1 = swapPairs(n1)
printList(nn1)
