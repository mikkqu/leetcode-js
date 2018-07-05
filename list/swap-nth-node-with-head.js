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

let swapNode = (head, n) => {
    if (!head) { return head }
    if (n === 1) { return head }

    let prev = null
    let current = head
    let count = 1

    while (current && count < n) {
        prev = current
        current = current.next
        count++
    }

    if (!current) { return head }

    prev.next = head
    let temp = head.next
    head.next = current.next
    current.next = temp

    return current
}


let n6 = new ListNode(10)
let n5 = new ListNode(5, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(4, n3)
let n1 = new ListNode(7, n2)

printList(n1)

let nn1 = swapNode(n1, 3)

printList(nn1)