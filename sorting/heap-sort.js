
// http://eloquentjavascript.net/1st_edition/appendix2.html

class BinaryHeap {
    constructor(scoreFn) {
       this.content = []
       this.scoreFn = scoreFn
    }

    size() {
        return this.content.length
    }

    push(el) {
        this.content.push(el)
        this.bubbleUp(this.content.length - 1)
    }

    pop() {
        let result = this.content[0]
        let end = this.content.pop()

        if (this.content.length > 0) {
            this.content[0] = end
            this.sinkDown(0)
        }

        return result
    }

    remove(node) {
        let length = this.content.length

        for (let i = 0; i < length; i++) {
            if (this.content[i] != node) { continue }

            let end = this.content.pop()

            if (i == length - 1) { break }

            this.content[i] = end
            this.bubbleUp(i)
            this.sinkDown(i)
            break
        }
    }

    bubbleUp(n) {
        let el = this.content[n]
        let score = this.scoreFn(el)

        while (n > 0) {
            let parentIndex = Math.floor((n + 1) / 2) - 1
            let parent = this.content[parentIndex]

            if (score >= this.scoreFn(parent)) {
                break
            }

            this.content[parentIndex] = el
            this.content[n] = parent
            n = parentIndex
        }
    }

    sinkDown(n) {
        let length = this.content.length
        let el = this.content[n]
        let elScore = this.scoreFn(el)

        while (true) {
            let child2n = (n + 1) * 2
            let child1n = child2n - 1
            let child1score
            let child2score

            let swap = null

            if (child1n < length) {
                let child1 = this.content[child1n]
                child1score = this.scoreFn(child1)

                if (child1score < elScore) {
                    swap = child1n
                }
            }

            if (child2n < length) {
                let child2 = this.content[child2n]
                child2score = this.scoreFn(child2)

                if (child2score < (swap == null ? elScore : child1score)) {
                    swap = child2n
                }
            }

            if (!swap) { break }

            this.content[n] = this.content[swap]
            this.content[swap] = el
            n = swap
        }
    }
}

let heap = new BinaryHeap((x) => -x)
let arr = [3, 1, 5, 4, 2]

arr.forEach((item) => heap.push(item))

heap.remove(3)

while (heap.size() > 0) {
    console.log(heap.pop())
}