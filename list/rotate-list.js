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

let rotateList = (head, n) => {
    if (head == null || head.next == null) { return head }

    let dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy

    let i;
    for (i = 0; fast.next != null; i++)
    	fast = fast.next;

    for (let j = i - n % i; j > 0; j--)
    	slow = slow.next

    fast.next = dummy.next
    dummy.next = slow.next
    slow.next = null

    return dummy.next
}

let n6 = new ListNode(10)
let n5 = new ListNode(9, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(7, n4)
let n2 = new ListNode(6, n3)
let n1 = new ListNode(5, n2)

printList(n1)
let nn1 = rotateList(n1, 2)
printList(nn1)
