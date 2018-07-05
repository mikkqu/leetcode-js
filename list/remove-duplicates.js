class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

/*
    If no memory allowed: sort list and brute force for O(n^2)
*/
let removeDups = (head) => {
    let hash = {}

    let dummy = new ListNode(null, head)
    let prev = dummy
    let curr = head

    while (curr) {
        if (hash.hasOwnProperty(curr.val)) {
            prev.next = curr.next
        } else {
            hash[curr.val] = 1
            prev = prev.next
        }

        curr = curr.next
    }

    return dummy.next
}

let removeDupsEasy = (head) => {
    if (!head) { return null }

    let hash = {}

    let curr = head
    hash[head.val] = 1

    while (curr.next) {
        if (hash.hasOwnProperty(curr.next.val)) {
            curr.next = curr.next.next
        } else {
            hash[curr.next.val] = 1
            curr = curr.next
        }
    }

    return head
}

let printList = (head) => {
    let arr = []

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    console.log(arr.join(' -> '))
}

let n6 = new ListNode(3)
let n5 = new ListNode(5, n6)
let n4 = new ListNode(2, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(2, n3)
let n1 = new ListNode(1, n2)

printList(n1)

// 1 -> 2 -> 3 -> 5

let nn1 = removeDupsEasy(n1)

printList(nn1)
