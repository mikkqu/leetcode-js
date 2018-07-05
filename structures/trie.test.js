const Trie = require('./trie').Trie;

test('Trie is a class', () => {
    expect(typeof Trie.prototype.constructor).toEqual('function');
});

test('Trie can add items', () => {
    let t = new Trie();

    let words = ["the", "there", "them"]
    for (let w of words) {
        t.insert(w)
    }

    expect(t.isWord("the").toBeTrue)
    expect(t.isWord("there").toBeTrue)
    expect(t.isWord("their").toBeFalse)
});

test('Trie can delete items', () => {
    let t = new Trie();

    let words = ["the", "there", "them"]
    for (let w of words) {
        t.insert(w)
    }

    t.remove("there")
    t.remove("th")
    t.remove("thei")

    expect(t.isWord("the").toBeTrue)
    expect(t.isWord("there").toBeFalse)
    expect(t.isWord("their").toBeFalse)
});

test('Trie can use intermediate nodes', () => {
    let t = new Trie();

    let words = ["the", "there", "them"]
    for (let w of words) {
        t.insert(w)
    }

    let n1 = t.getNode("th")
    let n2 = t.getNode("e", n1)
    let n3 = t.getNode("a", n1)

    expect(typeof n1).toEqual('object')
    expect(n1.children.keys).toBeTrue
    expect(n2.children.keys).toBeTrue
    expect(n3).toBeNull
});

test('Trie can print sorted elements', () => {
    let t = new Trie();

    let words = ['abc', 'cab', 'bac']
    for (let w of words) {
        t.insert(w)
    }

    expect(t.sort()).toEqual(['abc', 'cab', 'bac'])
});