/*
    Min Heap solution

    Time: O(N * log(K))
    Space: O(K)

    Building a heap takes: O(K)
    Insertion and extraction from min-heap: O(log(K))

    If K is substantially smaller than N, we can argue that complexity
        is practically linear
*/

class Node {
    constructor(priority) {
        this.priority = priority
        this.next = null
    }
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(priority) {
        const newNode = new Node(priority);
        this.heap.push(newNode);
        let currentNodeIdx = this.heap.length - 1;
        let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);

        while (
            this.heap[currentNodeParentIdx] &&
            newNode.priority < this.heap[currentNodeParentIdx].priority
        ) {
            const parent = this.heap[currentNodeParentIdx];
            this.heap[currentNodeParentIdx] = newNode;
            this.heap[currentNodeIdx] = parent;
            currentNodeIdx = currentNodeParentIdx;
            currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        }
    }

    extractMin() {
        if (this.heap.length < 3) {
            const toReturn = this.heap.pop();
            this.heap[0] = null;
            return toReturn.priority;
        }

        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
        let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
        let currentChildIdx = this.heap[right] && this.heap[right].priority <= this.heap[left].priority ? right : left;

        while (this.heap[currentChildIdx] && this.heap[currentIdx].priority >= this.heap[currentChildIdx].priority) {
            let currentNode = this.heap[currentIdx]
            let currentChildNode = this.heap[currentChildIdx];
            this.heap[currentChildIdx] = currentNode;
            this.heap[currentIdx] = currentChildNode;
        }

        return toRemove.priority;
    }

    print() {
        let node = this.heap

        while (node) {
            console.log('Node:', node)
            node = node.next
        }
    }
}

class PriorityQueue {
    constructor() {
        this.first = null
    }

    insert(priority) {
        let newNode = new Node(priority)

        if (!this.first || priority < this.first.priority) {
            newNode.next = this.first
            this.first = newNode
        } else {
            let ptr = this.first

            while (ptr.next && priority > ptr.next.priority) {
                ptr = ptr.next
            }

            newNode.next = ptr.next
            ptr.next = newNode
        }
    }

    extractMin() {
        let first = this.first
        this.first = this.first.next

        return first.priority
    }

    print() {
        let node = this.first

        while (node) {
            console.log('Node:', node.priority)
            node = node.next
        }
    }
}

let heapSort = (arr, k) => {
    let heap = new MinHeap()

    for (let i = 0; i < k + 1; i++) {
        heap.insert(arr[i])
    }

    for (let i = k + 1; i < arr.length; i++) {
        arr[i - (k + 1)] = heap.extractMin()

        heap.insert(arr[i])
    }

    for (let i = 0; i <= k; i++) {
        arr[arr.length - k - 1 + i] = heap.extractMin()
    }

    return arr
}

/* Tests */

let arr1 = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
let k1 = 2

console.log(heapSort(arr1, k1))