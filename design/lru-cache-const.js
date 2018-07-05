class Node {
    constructor(key, value) {
        this.key = key
        this.value = value

        this.prev = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = {}

        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key) {
        if (this.hash.hasOwnProperty(key)) {
            let node = this.hash[key]
            this.remove(node)
            this.add(node)
            return node.value
        }

        return -1
    }

    put(key, value) {
        if (this.hash.hasOwnProperty(key)) {
            this.remove(this.hash[key])
        }

        let node = new Node(key, value)
        this.add(node)
        this.hash[key] = node

        if (Object.keys(this.hash).length > this.capacity) {
            node = this.head.next
            this.remove(node)
            delete this.hash[node.key]
        }
    }

    remove(node) {
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }

    add(node) {
        let prev = this.tail.prev
        prev.next = node
        this.tail.prev = node
        node.prev = prev
        node.next = this.tail
    }
}

let cache = new LRUCache(3)

cache.put(1, 15)
cache.put(2, 25)
cache.put(3, 35)
cache.put(4, 45)
cache.put(5, 55)

console.log(cache)