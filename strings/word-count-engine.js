let wordCountEngine = (document) => {
    let words = document.split(' ').filter((item) => item != '').map((item) => {
      return item.replace(/[^\w]/g, '').toLowerCase()
    })

    let hash = {}
    let maxOccurs = 0

    for (let word of words) {
        hash[word] = hash[word] + 1 || 1
        if (hash[word] > maxOccurs) { maxOccurs = hash[word] }
    }

    /*
      Create counterList to hold array of words where index is frequency:
      [[], ['words', 'with', 'fq', one], ['words', 'with', 'two'], ['etc']]
    */
    let counterList = []
    for (let j = 0; j <= maxOccurs; j++) {
        counterList[j] = []
    }

    for (let key in hash) {
        let counter = hash[key]
        counterList[counter].push(key)
    }

    /*
      Push values into array with required format
    */
    let result = []
    for (let j = counterList.length - 1; j > 0; j--) {
        if (counterList[j] == []) { continue }

        for (let m = 0; m < counterList[j].length; m++) {
            result.push([counterList[j][m], j.toString()])
        }
    }

    return result
}

console.log(wordCountEngine('hey hey there bla bla'))