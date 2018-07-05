class ListNode {
    constructor(val, next = null) {
        this.next = next
        this.val = val
    }
}

/*
    Interface:
        insertAtHead(val)
        insertAtTail(val)

        removeAtHead(val)
        removeAtTail(val)

        insertAtIndex(index, val)
        deleteAtIndex(index)

        insertAfterKey(key, val)
        insertBeforeKey(key, val)

        getIndexByValue(val)
        getValueAtIndex(index)
        getNodeAtIndex(index)

        doForEach(fn)
        stringify()
*/

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head
        this.tail = tail
    }

    insertAtHead(val) {
        if (!this.head) {
            this.head = new ListNode(val, null)
            this.tail = this.head
        } else {
            this.head = new ListNode(val, this.head)
        }
    }

    insertAtTail(val) {
        if (!this.head) {
            this.head = new ListNode(val, null)
            this.tail = this.head
        } else {
            this.tail.next = new ListNode(val, null)
            this.tail = this.tail.next
        }
    }

    removeAtHead(val) {
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
    }

    removeAtTail(val) {
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head

            while (curr.next !== this.tail) {
                curr = curr.next
            }

            curr.next = null
            this.tail = curr
        }
    }

    insertAtIndex(index, val) {
        if (index === 0) {
            return this.insertAtHead(val)
        }

        let node = this.getNodeAtIndex(index - 1)
        if (!node) {
            return
        }

        if (node.next) {
            node.next = new ListNode(val, node.next)
        } else {
            node.next = new ListNode(val, null)
            this.tail = node.next
        }
    }

    removeAtIndex(index) {
        let curr = this.getNodeAtIndex(index)
        if (!curr) {
            return
        }

        if (index === 0) {
            return this.removeAtHead()
        }

        let node = this.getNodeAtIndex(index - 1)

        if (curr.next) {
            node.next = curr.next
        } else {
            node.next = null
            this.tail = node
        }
    }

    insertAfterKey(key, value) {
        let index = this.getIndexByValue(key)
        if (index < 0) {
            return
        }

        this.insertAtIndex(index + 1, value)
    }

    insertBeforeKey(key, value) {
        let index = this.getIndexByValue(key)
        if (index < 0) {
            return
        }

        this.insertAtIndex(index, value)
    }

    getNodeAtIndex(index) {
        let curr = this.head

        while (curr && index--) {
            curr = curr.next
        }

        return curr
    }

    getValueAtIndex(index) {
        let curr = this.head

        while (curr && index--) {
            curr = curr.next
        }

        if (curr) {
            return curr.val
        } else {
            return null
        }
    }

    getIndexByValue(value) {
        let curr = this.head
        let index = 0

        while (curr) {
            if (curr.val === value) {
                return index
            }

            curr = curr.next
            index++
        }

        return -1
    }

    doForEach(fn) {
        let curr = this.head

        while (curr) {
            fn(curr)
            curr = curr.next
        }
    }

    stringify() {
        let out = []
        let curr = this.head

        while (curr) {
            out.push(curr.val)
            curr = curr.next
        }

        return out.join(' -> ')
    }
}

let list = new LinkedList()

list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(3)

list.removeAtHead()
list.removeAtTail()
list.removeAtIndex(0)

list.insertAtIndex(0, 1)
list.insertAtIndex(1, 2)
list.insertAtIndex(2, 3)

list.insertAfterKey(3, 4)
list.insertAfterKey(1, 1.5)
list.insertBeforeKey(1, 0)

console.log(list.stringify())

console.log(list.getValueAtIndex(2))

