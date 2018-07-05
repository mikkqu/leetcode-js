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

let splitInHalf = (head, first_second) => {
    if (!head) {
        first_second.first = null
        first_second.second = null
        return
    }

    if (!head.next) {
        first_second.first = head
        first_second.second = null
    } else {
        let slow = head
        let fast = head.next

        while (fast) {
            fast = fast.next
            if (fast) {
                fast = fast.next
                slow = slow.next
            }
        }

        first_second.first = head
        first_second.second = slow.next

        slow.next = null
    }
}

let mergeSortedLists = (first, second) => {
    if (!first) { return second }
    if (!second) { return first }

    let new_head = null

    if (first.val <= second.val) {
        new_head = first
        first = first.next
    } else {
        new_head = second
        second = second.next
    }

    let new_current = new_head

    while (first && second) {
        let temp = null
        if (first.val <= second.val) {
            temp = first
            first = first.next
        } else {
            temp = second
            second = second.next
        }

        new_current.next = temp
        new_current = temp
    }

    if (first) {
        new_current.next = first
    } else if (second) {
        new_current.next = second
    }

    return new_head
}

let mergeSort = (head) => {
    if (!head || !head.next) { return head }

    let first = null
    let second = null
    let firstSecond = { first, second }

    splitInHalf(head, firstSecond)

    firstSecond.first = mergeSort(firstSecond.first)
    firstSecond.second = mergeSort(firstSecond.second)

    return mergeSortedLists(firstSecond.first, firstSecond.second)
}

let n6 = new ListNode(10)
let n5 = new ListNode(5, n6)
let n4 = new ListNode(8, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(4, n3)
let n1 = new ListNode(7, n2)

printList(n1)

let nn1 = mergeSort(n1)

printList(nn1)