class NodeClone {
    constructor(data, neighbors = []) {
        this.data = data
        this.neighbors = neighbors
    }
}

let printGraph = (root) => {
    let visited = new Set()

    let _printGraph = (node, visited) => {
        if (!node || visited.has(node)) { return }

        visited.add(node)

        let items = node.neighbors
            .map((x) => x.data).join(' -> ')

        console.log(`${node.data}: { ${items} }`)

        for (let n of node.neighbors) {
            _printGraph(n, visited)
        }
    };

    _printGraph(root, visited)
};


let clone = (root) => {
    let nodesCompleted = {}

    let cloneRec = (root, nodesCompleted) => {
        if (!root) { return null }

        let pNew = new NodeClone(root.data)
        nodesCompleted[root.data] = pNew

        for (let p of root.neighbors) {
            let x = nodesCompleted[p.data]

            if (!x) {
                pNew.neighbors.push(
                    cloneRec(p, nodesCompleted)
                )
            } else {
                pNew.neighbors.push(x)
            }
        }

        return pNew
    }

    return cloneRec(root, nodesCompleted)
};

let createTestGraph = () => {
    let vertices = [
        new NodeClone(0),
        new NodeClone(1),
        new NodeClone(2)
    ]

    vertices[0].neighbors = [vertices[1]]
    vertices[1].neighbors = [vertices[2]]
    vertices[2].neighbors = [vertices[0]]

    return vertices
}

let vertices = createTestGraph()
printGraph(vertices[0])

let cp = clone(vertices[0])

console.log('---')
printGraph(cp);