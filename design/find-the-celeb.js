let findCelebrity = (n) => {
    let candidate = 0

    for (let i = 1; i < n; i++) {
        if (knows(candidate, i))
            candidate = i
    }

    for (let i = 0; i < n; i++) {
        if (i != candidate && (knows(candidate, i) || !knows(i, candidate))) {
            return -1
        }
    }

    return candidate
}