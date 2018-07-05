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

let copyList = (head) => {
    if (!head) { return null }

    let newHead = new ListNode()
    let newCurr = newHead

    while (head) {
        newCurr.val = head.val
        if (head.next) {
            newCurr.next = new ListNode()
        }

        head = head.next
        newCurr = newCurr.next
    }

    return newHead
}

let n3 = new ListNode(7, null)
let n2 = new ListNode(6, n3)
let n1 = new ListNode(5, n2)

printList(n1)

let nn1 = copyList(n1)

printList(nn1)

nn1.next.val = 4

console.log('---')
printList(n1)
printList(nn1)