let solve = (A) => {
    let arr = A.map(() => [0, 0])
    let max = 0

    for (let i = A.length - 1; i > 0; i--) {
        let parent = arr[A[i]]
        let currLen = arr[i][0] + 1

        parent[1] = Math.max(parent[1], currLen + parent[0])
        parent[0] = Math.max(parent[0], currLen)

        max = Math.max(max, parent[1])
    }

    return max
}

/*
    Edge between P[i] and i

            0
         /  |  \
       1    2    3
                  \
                   4
                 /   \
         [5, 6, 7]   [8, 9, 10]
*/

           // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
let input = [-1, 0, 0, 0, 3, 4, 5, 6, 4, 5, 6,  2]
console.log(solve(input))