
let timePlanner = (slotsA, slotsB, dur) => {
    let iA = 0
    let iB = 0

    while (iA < slotsA.length && iB < slotsB.length) {
        let start = Math.max(slotsA[iA][0], slotsB[iB][0])
        let end = Math.min(slotsA[iA][1], slotsB[iB][1])

        if (start + dur <= end) {
            return [start, start + dur]
        }

        if (slotsA[iA][1] < slotsB[iB][1]) {
            iA++
        } else {
            iB++
        }
    }

    return []
}


let slotsA = [[10, 50], [60, 120], [140, 210]]
let slotsB = [[0, 15], [60, 70]]

console.log(timePlanner(slotsA, slotsB, 4))