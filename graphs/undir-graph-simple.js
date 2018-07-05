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

/*
        A -------
      / | \     |
    B   C--D    |
     \          |
      E   F-----|
*/

let nA = new UndirectedGraphNode('A')
let nB = new UndirectedGraphNode('B')
let nC = new UndirectedGraphNode('C')
let nD = new UndirectedGraphNode('D')
let nE = new UndirectedGraphNode('E')
let nF = new UndirectedGraphNode('F')

nA.neighbors = [ nB, nC, nD, nF ]
nB.neighbors = [ nA, nE ]
nC.neighbors = [ nA, nD ]
nD.neighbors = [ nA, nC ]
nE.neighbors = [ nB ]
nF.neighbors = [ nA ]

let g = new Graph([ nA, nB, nC, nD, nE, nF ])
g.print()