class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

/*
    Recursively
*/
let removeElementsRec = (head, val) => {
    if (head === null) { return null }

    head.next = removeElements(head.next, val)

    return head.val == val ? head.next : head
}

/*
    Weird, care about special cases
*/
var removeElementsW = function(head, key) {
    let prev = null
    let curr = head

    while (curr) {
        if (curr.val === key) {
            if (prev === null) {
                head = head.next
            } else {
                prev.next = curr.next
            }
        } else {
            prev = curr
        }

        curr = curr.next
    }

    return head
};

/*
    Recommended
*/
var removeElementsR = function(head, val) {
    let fake = new ListNode(-1, head)

    let curr = head
    let prev = fake

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next
        } else {
            prev = prev.next
        }

        curr = curr.next
    }

    return prev.next
};

/*
    One more
*/
var removeElements = function(head, val) {
    let fake = new ListNode(-1, head)
    let curr = fake

    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }

    return fake.next
};

let el2 = new ListNode(3)
let el1 = new ListNode(2, el2)
let head = new ListNode(1, el1)

let list = removeElements(head, 2)

console.log(list)