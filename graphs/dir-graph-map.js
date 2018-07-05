
class Graph {
    constructor() {
        this.list = new Map()
    }

    addVertex(...vList) {
        for (let v of vList) {
            this.list.set(v, [])
        }
    }

    addEdge(v, vList) {
        for (let n of vList) {
            if (!this.list.get(v).includes(n))
                this.list.get(v).push(n)
        }
    }

    print() {
        for (let key of this.list.keys()) {
            let out = key + ' -> '

            for (let n of this.list.get(key)) {
                out += n + ' '
            }

            console.log(out)
        }
    }

    bfs(startVertex) {
        let toVisit = new Set()
        let q = [ startVertex ]
        let out = []

        for (let key of this.list.keys()) {
            toVisit.add(key)
        }

        while (toVisit.size) {
            while (q.length) {
                let item = q.pop()

                if (!toVisit.has(item)) { continue }
                toVisit.delete(item)

                out.push(item)

                for (let n of this.list.get(item)) {
                    if (toVisit.has(n)) {
                        q.unshift(n)
                    }
                }
            }

            q.push(toVisit.keys().next().value)
        }

        console.log(out.join(' -> '))
    }

    dfs(startVertex) {
        let _dfs = (item, toVisit) => {
            if (!toVisit.has(item)) { return }

            toVisit.delete(item)

            out.push(item)

            for (let n of this.list.get(item)) {
                if (toVisit.has(n)) {
                    _dfs(n, toVisit)
                }
            }
        }

        let toVisit = new Set()
        let out = []

        for (let key of this.list.keys()) {
            toVisit.add(key)
        }

        _dfs(startVertex, toVisit)

        while (toVisit.size) {
            _dfs(toVisit.keys().next().value, toVisit)
        }

        console.log(out.join(' -> '))
    }
}

/*
        A -------
      / ^ \     |
     v  |  v    |
    B   C<-D    |   G-->H
     \          |
      v         |
      E    F<---|
*/

let g = new Graph()

g.addVertex('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H')

g.addEdge('A', [ 'B', 'D', 'F' ])
g.addEdge('B', [ 'E' ])
g.addEdge('C', [ 'A' ])
g.addEdge('D', [ 'C' ])
g.addEdge('E', [])
g.addEdge('F', [])

g.addEdge('G', [ 'H' ])
g.addEdge('H', [])

// g.print()

g.bfs('A')
g.dfs('A')