class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        let val = this.map.get(key);

        if (typeof val === 'undefined') { return -1 }

        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key, value) {
        if (this.map.has(key)) { this.map.delete(key) }

        this.map.set(key, value);
        let keys = this.map.keys();

        if (this.map.size > this.capacity) {
            this.map.delete(keys.next().value)
        }
    }
}

let cache = new LRUCache(5)

cache.put(1, 15)
cache.put(2, 25)
cache.put(3, 35)
cache.put(4, 45)
cache.put(5, 55)
cache.put(6, 65)
cache.put(7, 75)
cache.get(3)

console.log(cache)