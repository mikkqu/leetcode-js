class HashMap {
    constructor() {
        this.maxLen = 1000
        this.set = []

        for (let i = 0; i < this.maxLen; i++) { this.set[i] = [] }
    }

    _getIndex(key) {
        return key % this.maxLen
    }

    _getPos(key, index) {
        for (let i = 0; i < this.set[index].length; i++) {
            if (this.set[index][i][0] === key) {
                return i
            }
        }

        return -1
    }

    put(key, value) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        if (pos < 0) {
            this.set[index].push([key, value])
        } else {
            this.set[index][pos][1] = value
        }
    }

    get(key) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        if (pos >= 0) {
            return this.set[index][pos][1]
        } else {
            return -1
        }
    }

    remove(key) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        if (pos >= 0) {
            this.set[index].splice(pos, 1)
        }
    }
}


let hash = new HashMap()

hash.put(1, 'a')
hash.put(2, 'b')
console.log(hash.get(2))


console.time('add lot of els to the map')
for (let x = 0; x <= 50000; x++) {
    hash.add(x)
}
console.timeEnd('add lot of els to the map')