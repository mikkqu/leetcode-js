
class Node {
    constructor(val, prev = null, next = null, child = null) {
        this.val = val
        this.prev = prev
        this.next = next
        this.child = child
    }
}

let print = (head) => {
    let curr = head
    let arr = []

    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    console.log(arr.join(' <-> '))
}

let flatten = (head) => {
    for (let phead = head; phead; phead = phead.next) {
        if (phead.child) {
            let ctail = phead.child
            while (ctail.next) { ctail = ctail.next }

            if (phead.next) {
                phead.next.prev = ctail
            }

            phead.child.prev = phead
            ctail.next = phead.next
            phead.next = phead.child

            phead.child = null
        }
    }

    return head
}

let n1, n2, n3, n4, n5, n6
let n7, n8, n9, n10, n11, n12

n12 = new Node(12, n11, null, null)
n11 = new Node(11, null, n12, null)

n10 = new Node(10, n9, null, null)
n9 = new Node(9, n8, n10, null)
n8 = new Node(8, n7, n9, n11)
n7 = new Node(7, null, n8, null)

n6 = new Node(6, n5, null, null)
n5 = new Node(5, n4, n6, null)
n4 = new Node(4, n3, n5, null)
n3 = new Node(3, n2, n4, n7)
n2 = new Node(2, n1, n3, null)
n1 = new Node(1, null, n2, null)

let ll = n1

let fll = flatten(ll)

print(fll)