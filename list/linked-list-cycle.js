
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

/*
    Using space
*/
let detectCycleSp = (head) => {
    let visited = new Set()

    let node = head
    while (node != null) {
        if (visited.has(node)) {
            return node
        } else {
            visited.add(node)
            node = node.next
        }
    }

    return null
};

/*
    O(1) space
*/
let detectCycle = (head) => {
    if (head == null) { return null }

    let slow = head
    let fast = head
    let found = false

    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next
        slow = slow.next

        if (slow == fast) {
            found = true
            break
        }
    }

    if (found) {
        slow = head

        while (slow != fast) {
            slow = slow.next
            fast = fast.next
        }

        return slow
    }

    return null
}


let a4 = new ListNode(4)
let a3 = new ListNode(3, a4)
let a2 = new ListNode(2, a3)
let a1 = new ListNode(1, a2)

a4.next = a2

console.log(detectCycle(a1))