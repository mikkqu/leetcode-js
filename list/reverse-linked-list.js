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

let revList = (head) => {
    let prev = null
    let curr = head

    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev
}

let revListRec = (head, prev = null) => {
    if (head == null) { return prev }

    let nextTmp = head.next
    head.next = prev

    return revListRec(nextTmp, head)
}

let revListRec2 = (curr) => {
    if (curr == null) { return null }
    if (curr.next == null) { return curr }

    let nextNode = curr.next
    curr.next = null

    let rest = revListRec2(nextNode)

    nextNode.next = curr
    return rest
}

let n3 = new ListNode(3)
let n2 = new ListNode(2, n3)
let n1 = new ListNode(1, n2)


printList(n1)
let r1 = revListRec(n1)
printList(r1)



























var reverseList = (head) => {
    let prev = null;
    let curr = head;

    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
}