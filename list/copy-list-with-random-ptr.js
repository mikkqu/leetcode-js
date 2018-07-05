class RandomListNode {
    constructor(val, next = null, random = null) {
        this.val = val
        this.next = next
        this.random = random
    }
}

let copyRandomList = (head) => {
    let iter = head
    let next = null

    // First: copy each node and link together side-by-side in a single list.
    while (iter != null) {
        next = iter.next

        let copy = new RandomListNode(iter.val)
        iter.next = copy
        copy.next = next

        iter = next
    }

    console.log(head)

    // Second round: assign random pointers for the copy nodes.
    iter = head
    while (iter != null) {
        if (iter.random != null) {
            iter.next.random = iter.random.next
        }
        iter = iter.next.next
    }

    // Third round: restore the original list, and extract the copy list.
    iter = head
    let pseudoHead = new RandomListNode(0)
    let copy, copyIter = pseudoHead

    while (iter != null) {
        next = iter.next.next

        // extract the copy
        copy = iter.next
        copyIter.next = copy
        copyIter = copy

        // restore the original list
        iter.next = next

        iter = next
    }

    return pseudoHead.next
}

let n1, n2, n3

n3 = new RandomListNode(21, null, n1)
n2 = new RandomListNode(14, n3, null)
n1 = new RandomListNode(7, n2, n3)

let nn1 = copyRandomList(n1)

console.log(nn1)