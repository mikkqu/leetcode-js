
class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null, head)

    let slow = dummy
    let fast = dummy

    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }

    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next
};

let head = new ListNode(1)
head.next = new ListNode(2)

console.log(removeNthFromEnd(head, 1))