
class DListNode {
    constructor(val, next = null, prev = null) {
        this.val = val
        this.next = next
        this.prev = prev
    }
}

/*
    Interface:
        insertAtHead(val)
        insertAtTail(val)

        removeAtHead(val)
        removeAtTail(val)

        insertAtIndex(index, val)
        removeAtIndex(index)

        insertAfterKey(key, val)
        insertBeforeKey(key, val)

        getIndexByValue(val)
        getValueAtIndex(index)
        getNodeAtIndex(index)

        doForEach(fn)
        stringify()
*/

class DLinkedList {
    constructor(head = null, tail = null) {
        this.head = head
        this.tail = tail
    }

    insertAtHead(val) {
        if (!this.head) {
            this.head = new DListNode(val, null, null)
            this.tail = this.head
        } else {
            this.head = new DListNode(val, this.head, null)
            this.head.next.prev = this.head
        }
    }

    insertAtTail(val) {
        if (!this.head) {
            this.insertAtHead(val)
        } else {
            this.tail.next = new DListNode(val, null, this.tail)
            this.tail = this.tail.next
        }
    }

    removeAtHead() {
        if (this.head && this.head.next) {
            this.head = this.head.next
            this.head.prev = null
        } else {
            this.head = null
            this.tail = null
        }
    }

    removeAtTail() {
        if (this.tail && this.tail.prev) {
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            this.head = null
            this.tail = null
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
            let tmp = new DListNode(val, node.next, node)
            node.next.prev = tmp
            node.next = tmp
        } else {
            let tmp = new DListNode(val, null, node)
            node.next = tmp
            this.tail = tmp
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

        if (curr.next) {
            curr.next.prev = curr.prev
            curr.prev.next = curr.next
        } else {
            curr.prev.next = null
            this.tail = curr.prev
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
            return curr.data
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

let list = new DLinkedList()

list.insertAtTail(5)
list.insertAtTail(6)
list.insertAtHead(4)

list.removeAtIndex(0)
list.insertBeforeKey(5, 9)

let arr = list.stringify()
console.log(arr)