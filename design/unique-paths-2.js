let uniquePathsWithObstacles = (obstacleGrid) => {
    let width = obstacleGrid[0].length
    let dp = new Array(width).fill(0)

    dp[0] = 1

    for (let i = 0; i < obstacleGrid.length; i++) {
        let row = obstacleGrid[i]

        for (let j = 0; j < width; j++) {
            if (row[j] == 1)
                dp[j] = 0
            else if (j > 0)
                dp[j] += dp[j - 1]
        }
    }

    return dp[width - 1]
}

let input = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

console.log(uniquePathsWithObstacles(input))