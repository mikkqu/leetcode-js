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

let reverseNodes = (head, k) => {
    if (!head) { return null }
    if (k <= 1) { return head }

    let reversed = null
    let prev_tail = null

    while (head && k > 0) {
        let current_head = null
        let current_tail = head

        let n = k
        while (head && n > 0) {
            let temp = head.next
            head.next = current_head
            current_head = head

            head = temp
            n--
        }

        if (!reversed) {
            reversed = current_head
        }

        if (prev_tail) {
            prev_tail.next = current_head
        }

        prev_tail = current_tail
    }

    return reversed
};

let n6 = new ListNode(10)
let n5 = new ListNode(9, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(7, n4)
let n2 = new ListNode(6, n3)
let n1 = new ListNode(5, n2)

printList(n1)

let nn1 = reverseNodes(n1, 2)

printList(nn1)