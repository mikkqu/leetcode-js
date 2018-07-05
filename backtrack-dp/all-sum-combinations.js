let _printSums = (target, currSum, start, output, result) => {
    if (currSum === target) {
        result.push(output.slice());
    }

    for (let i = start; i < target; i++) {
        let newSum = current_sum + i;

        if (newSum > target) { return }

        output.push(i);
        _printSums(target, newSum, i, output, result);
        output.pop();
    }
};

let printSums = function(target) {
    let output = [];
    let result = [];

    _printSums(target, 0, 1, output, result);

    return result;
};


console.log(printSums(4));