/*
    Trie (Prefix Tree)
*/

class Node {
    constructor() {
        this.children = new Map()
        this.terminates = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root

        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word[i])) {
                curr.children.set(word[i], new Node())
            }

           curr = curr.children.get(word[i])
        }

        curr.terminates = true
    }

    isWord(word, node = this.root) {
        let curr = node

        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word[i])) {
                return false
            }

            curr = curr.children.get(word[i])
        }

        return curr.terminates
    }

    getNode(word, node = this.root) {
        let curr = node

        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word[i])) {
                return null
            }

            curr = curr.children.get(word[i])
        }

        return (curr != null ? curr : null)
    }

    remove(word) {
        let _remove = (word, node, level) => {
            // console.log(word, node.children.keys(), level)
            if (!node) { return false }

            if (level === word.length) {
                /* Base case */
                if (node.terminates) {
                    node.terminates = false
                }

                return (node.children.size == 0)
            } else {
                /* Recursive case */
                let mapKey = word[level]

                if (_remove(word, node.children.get(mapKey), level + 1)) {
                    node.children.delete(mapKey)

                    return (!node.terminates) && (node.children.size === 0)
                }
            }
        }

        if (word.length > 0) {
            _remove(word, this.root, 0)
        }
    }

/*
    lexSort(node = this.root) {
        let _preorder = (node, arr) => {
            if (node != null) {
                for (let [key, value] of node.children) {
                    if (value.terminates) {
                        arr.push(key + '*')
                    } else {
                        arr.push(key);
                    }
                    _preorder(value, arr);
                }
            }

            return arr
        }

        let arr = _preorder(node, [])
        console.log(arr)
    }
*/

    sort(node = this.root) {
        let _sort = (node, word, sorted) => {
            if (node.terminates) {
                sorted.push(word)
            }

            for (let [key, value] of node.children) {
                _sort(value, word + key, sorted)
            }

            return sorted
        }

        let sorted = _sort(node, '', [])
        console.log(sorted)

        return sorted
    }
}

module.exports = { Trie, Node }