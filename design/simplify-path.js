let simplifyPath = (path) => {
    var elements = path.split('/')
    var stack = []

    for (let e in elements){
        if (elements[e]=="") { continue }
        if (elements[e]==".") { continue }
        if (elements[e]=="..") {
            stack.pop()
        } else {
            stack.push(elements[e]);
        }
    }

    return '/' + stack.join('/')
}

console.log(simplifyPath('/hey/../hp'))