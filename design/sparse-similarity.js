
/*
    Brute Force:

    4 documents -> 16 pairs -> but actually slightly less
    (4 * 3) / 2 = 6 pairs

    5 documents = (5 * 4) / 2 = 10 pairs
    O(N ^ 2) pairs

    Array comparison takes O(A * B) or O(A + B) using hash
    If arrays have W words at most: O(W)
    We do comparison for each pair, so: O(D^2 * W)
    Where D - number of documents
*/

class DocPair {
    constructor(d1, d2) {
        this.doc1 = d1
        this.doc2 = d2
    }

    equals(o) {
        if (o instanceof DocPair) {
            return o.doc1 == this.doc1 &&
                   o.doc2 == this.doc2
        }
        return false
    }

    hashCode() {
        return (this.doc1 * 31) ^ this.doc2
    }

    toString() {
        return `${this.doc1}, ${this.doc2}`
    }
}

class Document {
    constructor(id, w) {
        this.docId = id
        this.words = w
    }

    getWords() {
        return this.words
    }

    getId() {
        return this.docId
    }

    size() {
        return this.words.length
    }
}

/*
    O(D^2 * W) + O(W) space, brute force
*/
let computeSimilaritiesBF = (docs) => {
    let computeSimilarity = (doc1, doc2) => {
        let intersection = 0

        let set1 = new Set()

        for (let word of doc1.getWords()) {
            set1.add(word)
        }

        for (let word of doc2.getWords()) {
            if (set1.has(word)) {
                intersection++
            }
        }

        let union = doc1.size() + doc2.size() - intersection
        return intersection / union
    }

    let map = new Map()

    for (let i = 0; i < docs.length - 1; i++) {
        for (let j = i + 1; j < docs.length; j++) {
            let doc1 = docs[i]
            let doc2 = docs[j]

            let sim = computeSimilarity(doc1, doc2)

            // console.log(doc1.getId(), doc2.getId(), sim)

            if (sim > 0) {
                let pair = new DocPair(doc1.getId(), doc2.getId())
                map.set(pair, sim)
            }
        }
    }

    return map
}

/*
    O(P * W + D * W) + O(P * W) space, optimized
*/
let groupWords = (docs) => {
    let wordToDocs = new Map()

    for (let doc of docs) {
        for (let word of doc.getWords()) {
            if (!wordToDocs.has(word)) {
                wordToDocs.set(word, [ doc.getId() ])
            } else {
                let list = wordToDocs.get(word)
                list.push(doc.getId())
                wordToDocs.set(word, list)
            }
        }
    }

    return wordToDocs
}

let computeIntersections = (wordToDocs) => {
    let similarities = new Map()

    for (let word of wordToDocs.keys()) {
        let docs = wordToDocs.get(word)

        docs.sort((x, y) => x - y)

        for (let i = 0; i < docs.length - 1; i++) {
            for (let j = i + 1; j < docs.length; j++) {
                increment(similarities, docs[i], docs[j])
            }
        }
    }

    return similarities
}

let increment = (similarities, doc1, doc2) => {
    let pair = new DocPair(doc1, doc2).toString()

    if (!similarities.has(pair)) {
        similarities.set(pair, 1)
    } else {
        similarities.set(pair, similarities.get(pair) + 1)
    }
}

let adjustSimilarities = (docs, similarities) => {
    for (let entry of similarities.keys()) {
        let pairArray = entry.split(', ')
        let intersection = similarities.get(entry)

        // -1 is to access array, ID must be in order
        let doc1 = docs[pairArray[0] - 1]
        let doc2 = docs[pairArray[1] - 1]

        let union = doc1.size() + doc2.size() - intersection
        similarities.set(entry, intersection / union)
    }
}

let computeSimilarities = (docs) => {
    let wordToDocs = groupWords(docs)
    let similarities = computeIntersections(wordToDocs)

    adjustSimilarities(docs, similarities)

    return similarities
}


let d1 = new Document(1, [2, 3, 5, 7, 10])
let d2 = new Document(2, [3, 5, 12, 15, 20])
let d3 = new Document(3, [3, 6, 11, 14])
let d4 = new Document(4, [3, 6, 11, 14, 29])
let d5 = new Document(5, [3, 5])

console.log(computeSimilaritiesBF([d1, d2, d3, d4, d5]))
console.log(computeSimilarities([d1, d2, d3, d4, d5]))