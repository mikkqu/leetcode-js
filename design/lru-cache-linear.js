
class LRUCache {
    constructor(capacity) {
        this.bucket = {}
        this.keys = []

        this.capacity = capacity
        this.length = 0
    }

    updateKey(key) {
        let keyIndex = this.keys.indexOf(key)
        this.keys[keyIndex] = undefined

        this.keys.push(key)
    }

    get(key) {
        if (this.bucket.hasOwnProperty(key)) {
            this.updateKey(key)
            return this.bucket[key]
        } else {
            return -1
        }
    }

    put(key, value) {
        if (this.capacity <= 0) { console.log('OOM'); return; }

        if (this.bucket.hasOwnProperty(key)) {
            this.bucket[key] = value
            this.updateKey(key)
            return
        }

        if (this.length >= this.capacity) {
            var dKey = this.keys.shift()

            while (!dKey) {
                dKey = this.keys.shift()
            }

            delete this.bucket[dKey]
            this.length--
        }

        this.bucket[key] = value
        this.keys.push(key)
        this.length++
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

console.log(cache)