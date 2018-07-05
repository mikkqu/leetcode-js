
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

let mergeTwoLists = (l1, l2) => {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

let n4 = new ListNode(7)
let n3 = new ListNode(6, n4)
let n2 = new ListNode(4, n3)
let n1 = new ListNode(2, n2)

let p3 = new ListNode(5)
let p2 = new ListNode(3, p3)
let p1 = new ListNode(1, p2)

let m = mergeTwoLists(p1, n1)