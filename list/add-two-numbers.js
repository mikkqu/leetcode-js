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

var addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode();

    let p = l1
    let q = l2
    let curr = dummyHead
    let carry = 0

    while (p || q || carry) {
        let pv = p ? p.val : 0
        let qv = q ? q.val : 0

        let sum = pv + qv + carry
        carry = Math.floor(sum / 10)

        curr.next = new ListNode(sum % 10)
        curr = curr.next

        if (p) { p = p.next }
        if (q) { q = q.next }
    }

    return dummyHead.next
}

// Digits are stored in reverse order

let a3 = new ListNode(3)
let a2 = new ListNode(4, a3)
let a1 = new ListNode(2, a2)

let b3 = new ListNode(9)
let b2 = new ListNode(6, b3)
let b1 = new ListNode(5, b2)

printList(a1)
printList(b1)

let r = addTwoNumbers(a1, b1)

printList(r)