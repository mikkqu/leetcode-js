
let getSubsets = (v, target_sum) => {
    let getBit = (num, bit) => {
        return (num & (1 << bit)) ? 1 : 0
    }

    let sets = []
    let subsetsCount = Math.pow(2, v.length)

    for (let i = 0; i < subsetsCount; i++) {
        let st = new Set()
        let sum = 0

        for (let j = 0; j < v.length; j++) {
            if (getBit(i, j) === 1) {
                sum = sum + v[j]

                if (sum > target_sum) { break }

                st.add(v[j])
            }
        }

        if (sum === target_sum) {
            sets.push(st)
        }
    }

    return sets
}

let getSubsetsBt = (v, target) => {
    let _getSubsets = (list, partial, target, sets, stack) => {
        let listSum = 0

        for (let i = 0; i < partial.length; i++) {
            listSum += partial[i]
        }

        if (listSum === target) {
            sets.push(partial)
            return
        }

        if (listSum < target) {
            for (var i = 0; i < list.length; i++) {
                stack.push(list.slice())
                stack.push(partial.slice())

                let newPartial = partial.slice()
                newPartial.push(list[i])

                let newList = list.splice(i + 1)
                _getSubsets(newList, newPartial, target, sets, stack)

                partial = stack.pop()
                list = stack.pop()
            }
        }
    }

    let partial = []
    let stack = []
    let sets = []

    _getSubsets(v, partial, target, sets, stack)

    return sets
}


let v = [8, 13, 3, 22, 17, 39, 87, 45, 36]
console.log(getSubsets(v, 125))
console.log(getSubsetsBt(v, 125))