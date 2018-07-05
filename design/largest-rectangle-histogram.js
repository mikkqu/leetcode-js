let largestRectangleArea = (heights) => {
    let maxArea = 0
    let currArea = 0

    for (let i = 0; i < heights.length; i++) {
        let l = i - 1
        let r = i + 1

        let currHeight = heights[i]

        // Since we are comparing out from the current element
        // elements of the same height as the current element
        // will have the same max area rectangle.
        if (heights[r] === currHeight) { continue }

        currArea = currHeight

        // Check all bars to the left that are at least as tall.
        while (l >= 0 && heights[l] >= currHeight) {
            currArea += currHeight
            l--
        }

        // Check all bars to the right that are at least as tall.
        while (r < heights.length && heights[r] >= currHeight) {
            currArea += currHeight
            r++
        }

        maxArea = Math.max(currArea, maxArea)
        currArea = 0
    }

    return maxArea
}

let largestRectangleAreaStack = (heights) => {
    let ret = 0
    let index = []

    heights.push(0)

    for (let i = 0; i < heights.length; i++) {
        while (index.length > 0 && heights[index[0]] >= heights[i]) {
            let h = heights[index[0]]
            index.shift()

            let sidx = index.length > 0 ? index[0] : -1
            if (h * (i - sidx - 1) > ret) {
                ret = h * (i - sidx - 1)
            }
        }

        index.push(i)
    }

    return ret
}

console.log(largestRectangleAreaStack([2, 1, 5, 6, 2, 3]))