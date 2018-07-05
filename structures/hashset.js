class HashSet {
    constructor() {
        this.maxLen = 1000000
        this.set = []

        for (let i = 0; i < this.maxLen; i++) { this.set[i] = [] }
    }

    _getIndex(key) {
        return key % this.maxLen
    }

    _getPos(key, index) {
        for (let i = 0; i < this.set[index].length; i++) {
            if (this.set[index][i] === key) {
                return i
            }
        }

        return -1
    }

    add(key) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        if (pos == -1) {
            this.set[index].push(key)
        }
    }

    contains(key) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        return (pos >= 0)
    }

    remove(key) {
        let index = this._getIndex(key)
        let pos = this._getPos(key, index)

        if (pos >= 0) {
            this.set[index].splice(pos, 1)
        }
    }
}


let hash = new HashSet()

hash.add(2)
hash.add(2)
console.log(hash.contains(2))
hash.remove(2)
console.log(hash.contains(2))

// console.time('add lot of els to the map')
// for (let x = 0; x <= 50000; x++) {
//     hash.add(x)
// }
// console.timeEnd('add lot of els to the map')