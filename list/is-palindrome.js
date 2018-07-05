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

let reverse = (head) => {
    let prev = null

    while (head != null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}

let isPalindrome = (head) => {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    if (fast) {
        slow = slow.next
    }

    slow = reverse(slow)
    fast = head

    while (slow != null) {
        if (fast.val != slow.val) { return false }

        fast = fast.next
        slow = slow.next
    }

    return true
}

let n4 = new ListNode(1)
let n3 = new ListNode(2, n4)
let n2 = new ListNode(2, n3)
let n1 = new ListNode(1, n2)

console.log(isPalindrome(n1))