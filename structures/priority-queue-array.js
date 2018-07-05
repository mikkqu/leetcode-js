
/*
    Unsorted array: O(1) insert, O(n) extract
    Sorted array: O(n) insert, O(1) extract
    Binary heap: O(log N) insert, O(log N) extract
*/

class PriorityQueue {
    constructor() {
        this.data = []
    }

    push(value, priority = 0) {
        this.data.push({
            value: value,
            priority: priority
        })
    }

    pop() {
        let index = 0
        let min = Infinity

        for (let i = 0; i < this.data.length; i++) {
            let priority = this.data[i].priority

            if (Math.min(min, priority) === priority) {
                min = priority
                index = i
            }
        }

        return this.data.splice(index, 1)[0].value
    }

    size() {
        return this.data.length
    }
}

let pq = new PriorityQueue()

pq.push('A', 15)
pq.push('B', 20)
pq.push('C', 25)
pq.push('D', 5)
pq.push('E', 10)

console.log(pq.pop())
console.log(pq.pop())
console.log(pq.pop())