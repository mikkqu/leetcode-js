
/*
    O(time)
*/
let leastInterval = (tasks, n) => {
    let map = []
    let time = 0

    let aCode = 'A'.charCodeAt()

    for (let task of tasks) {
        let taskCode = task.charCodeAt()
        map[taskCode - aCode] = map[taskCode - aCode] + 1 || 1
    }

    map.sort((x, y) => y - x)

    while (map[0] > 0) {
        console.log(map)

        for (let i = 0; i <= n; i++) {
            if (map[0] === 0) { break }
            if (map[0 + i] > 0) { map[0 + i]-- }

            time++
        }

        map.sort((x, y) => y - x)
    }

    return time
}

/*
    TODO: O(n)
    Priority Queue
*/

let str = ['A', 'A', 'A', 'B', 'B', 'B', 'B']
let n = 2
console.log(leastInterval(str, n))