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

let getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) { return null }

    let currA = headA
    let lenA = 0

    while (currA.next !== null) {
        currA = currA.next
        lenA++
    }

    let currB = headB
    let lenB = 0

    while (currB.next !== null) {
        currB = currB.next
        lenB++
    }

    if (currA !== currB) {
        return null
    }

    currA = headA
    currB = headB

    if (lenA > lenB) {
        let diff = lenA - lenB

        while (diff--) {
            currA = currA.next
        }
    } else if (lenB > lenA) {
        let diff = lenB - lenA

        while (diff--) {
            currB = currB.next
        }
    }

    while (currA !== currB) {
        currA = currA.next
        currB = currB.next
    }

    return currA
}

let getIntersectionNodeShort = (headA, headB) => {
    let cur1 = headA
    let cur2 = headB

    while (cur1 !== cur2) {
        cur1 = cur1 ? cur1.next : headB
        cur2 = cur2 ? cur2.next : headA
    }

    return cur1
}

let a4 = new ListNode(1)
let a3 = new ListNode(2, a4)
let a2 = new ListNode(2, a3)
let a1 = new ListNode(1, a2)

let b4 = new ListNode(-1)
let b3 = new ListNode(-2, a4)
let b2 = new ListNode(-2, a3)
let b1 = new ListNode(-1, b2)

console.log(getIntersectionNode(a1, b1))