class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }

    print() {
        let curr = this
        let arr = []

        while (curr) {
            arr.push(curr.val)
            curr = curr.next
        }

        console.log(arr.join(' -> '))
    }
}

let oddEvenList = (head) => {
    if (head === null) { return null }

    let odd = head
    let even = head.next
    let evenHead = even

    while (even != null && even.next != null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}

let n5 = new ListNode(5)
let n4 = new ListNode(4, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(2, n3)
let n1 = new ListNode(1, n2)

let n = oddEvenList(n1)

n.print()