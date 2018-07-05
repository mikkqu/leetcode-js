let contains = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < el.length; j++) {
            if (arr[i][j] != el[j]) { break }

            if (j == el.length - 1) {
                return true
            }
        }
    }

    return false
}

let cleanRoom = (robot, row, col) => {
    let nextCell = (d, cell) => {
        let update = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        let n = [cell[0] + update[d][0], cell[1] + update[d][1]]

        return n
    }

    let cell = [0, 0]
    let d = 0
    let seen = [[0, 0]]

    stack = ['move','right','move','right','move','right','move']
    move = ['back','right','move','right','move','right','move','left']

    while (stack.length) {
        robot.clean()
        let action = stack.pop()

        console.log(stack.length, action)

        if (action == 'move') {
            let newCell = nextCell(d, cell)

            if (!contains(seen, newCell) && robot.move()) {
                seen.push(newCell)

                stack.push(...move)
                cell = newCell

                // console.log(JSON.stringify(stack))
            }
        } else if (action == 'left') {
            robot.turnLeft()
            d = (d + 1) % 4
        } else if (action == 'right') {
            robot.turnRight()
            d = (d - 1) % 4
            if (d == -1) { d = 3 }
        } else {
            cell = nextCell(d, cell)
            robot.move()
            robot.turnRight()
            robot.turnRight()
            d = (d + 2) % 4
        }
    }
}

let room = [
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1]
]

cleanRoom(room, 1, 3)