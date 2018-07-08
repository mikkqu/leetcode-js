
let minStepsToReachEnd = (arr) => {
    let sc = 0
    let e = 0
    let max = 0

    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, i + arr[i])
        if (i == e) {
            sc++
            e = max
        }
    }

    return sc
}

let canReachEnd = (arr) => {
    let maxReach = 0
    let lastIndex = arr.length - 1

    for (let i = 0; i <= maxReach && maxReach < lastIndex; i++) {
        maxReach = Math.max(maxReach, i + arr[i])
    }

    return maxReach >= lastIndex
}

console.log(canReachEnd([3, 3, 1, 0, 2, 0, 1]))
console.log(canReachEnd([3, 2, 0, 0, 2, 0, 1]))

console.log(minStepsToReachEnd([3, 3, 1, 0, 2, 0, 1]))
console.log(minStepsToReachEnd([3, 2, 0, 0, 2, 0, 1]))