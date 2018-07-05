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

let mergeAlternating = (list1, list2) => {
    if (!list1) { return list2 }
    if (!list2) { return list1 }

    let head = list1

    while (list1.next && list2) {
        let temp = list2
        list2 = list2.next

        temp.next = list1.next
        list1.next = temp
        list1 = temp.next
    }

    if (!list1.next) {
        list1.next = list2
    }

    return head
}

let reverseEvenNodes = (head) => {
    let curr = head
    let list_even = null

    while (curr && curr.next) {
        let even = curr.next
        curr.next = even.next

        even.next = list_even
        list_even = even

        curr = curr.next
    }

    return mergeAlternating(head, list_even)
}

let n6 = new ListNode(10)
let n5 = new ListNode(9, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(7, n4)
let n2 = new ListNode(6, n3)
let n1 = new ListNode(5, n2)

printList(n1)

let nn1 = reverseEvenNodes(n1)

printList(nn1)