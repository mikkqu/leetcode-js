function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

class Graph {
    constructor(nodes) {
        this.nodes = nodes
    }

    print() {
        for (let node of this.nodes) {
            let out = node.label + ' -> '

            for (let n of node.neighbors) {
                out += n.label + ' '
            }

            console.log(out)
        }
    }
}

let routeBetween = (n1, n2) => {
    let visited = new Set()

    let _dfs = (node) => {
        if (visited.has(node.label)) { return }

        visited.add(node.label)

        for (let n of node.neighbors) {
            _dfs(n)
        }
    }

    _dfs(n1)

    return visited.has(n2.label)
}

/*
        A -------
      / | \     |
    B   C--D    |   G--H
     \          |
      E   F-----|
*/

let nA = new UndirectedGraphNode('A')
let nB = new UndirectedGraphNode('B')
let nC = new UndirectedGraphNode('C')
let nD = new UndirectedGraphNode('D')
let nE = new UndirectedGraphNode('E')
let nF = new UndirectedGraphNode('F')
let nG = new UndirectedGraphNode('G')
let nH = new UndirectedGraphNode('H')

nA.neighbors = [ nB, nC, nD, nF ]
nB.neighbors = [ nA, nE ]
nC.neighbors = [ nA, nD ]
nD.neighbors = [ nA, nC ]
nE.neighbors = [ nB ]
nF.neighbors = [ nA ]
nG.neighbors = [ nH ]
nH.neighbors = [ nG ]

let g = new Graph([ nA, nB, nC, nD, nE, nF, nG, nH ])
g.print()

console.log(routeBetween(g, nC, nF))
console.log(routeBetween(g, nE, nG))