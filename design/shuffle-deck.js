let shuffleArray = (cards) => {
    for (let i = 0; i < cards.length; i++) {
        let k = rand(0, i)

        let temp = cards[k]
        cards[k] = cards[i]
        cards[i] = temp
    }
}

console.log(shuffleArray([1, 2, 3, 4]))