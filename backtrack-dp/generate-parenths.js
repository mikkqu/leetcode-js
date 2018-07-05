
let generateAlt = (n) => {
    let _printParenths = (n, lcount, rcount, out, r) => {
        if (lcount >= n && rcount >= n) {
            r.push("" +out)
        }

        if (lcount < n) {
            out.push('{')
            _printParenths(n, lcount + 1, rcount, out, r)
            out.pop()
        }

        if (rcount < lcount ) {
            out.push('}')
            _printParenths(n, lcount, rcount + 1, out, r)
            out.pop()
        }
    }

    let output = []
    let r = []

    _printParenths(n, 0, 0, output, r)

    return r
};

let generateBruteForce = (n) => {
    let valid = (arr) => {
        let bal = 0

        for (c of arr) {
            if (c == '(') {
                bal += 1
            } else {
                bal -= 1
            }

            if (bal < 0) {
                return false
            }
        }

        return bal == 0
    }

    let _generate = (A = []) => {
        if (A.length == 2 * n) {
            if (valid(A)) {
                ans.push(A.join(''))
            }
        } else {
            A.push('(')
            _generate(A)
            A.pop()
            A.push(')')
            _generate(A)
            A.pop()
        }
    }

    let ans = []

    _generate()

    return ans
}

let generateBacktrack = (N) => {
    let ans = []

    let backtrack = (S, left, right) => {
        if (S.length == 2 * N) {
            ans.push(S)
            return
        }

        if (left < N) {
            backtrack(S + '(', left + 1, right)
        }

        if (right < left) {
            backtrack(S + ')', left, right + 1)
        }
    }

    backtrack('', 0, 0)

    return ans
}


console.log(generateParenthesis(3))