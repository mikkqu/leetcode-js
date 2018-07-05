class HashSet {
    constructor() {
        this.maxLen = 100000
        this.set = []
    }

    getIndex(key) {
        return key % this.maxLen
    }

    getPos(key, index) {
        let temp = set[index]
        if (temp === null) { return - 1}
    }

    add(value) {
        if (this.contains(value)) { return }

        this.set.push(value)
    }

    contains(value) {
        return this.set.includes(value)
    }

    remove(value) {
        let index = this.set.indexOf(value)
        if (index !== -1) {
            this.set.splice(index, 1)
        }
    }
}


let hash = new HashSet()

console.time('add lot of els to the map')
for (let x = 0; x <= 50000; x++) {
    hash.add(x)
}
console.timeEnd('add lot of els to the map')