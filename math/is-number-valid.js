const STATE = {
    INTEGER: 'INTEGER',
    DECIMAL: 'DECIMAL',
    START: 'START',
    UNKNOWN: 'UNKNOWN'
};

let getNextState = (currentState, ch) => {
    if (currentState === STATE.START ||
        currentState === STATE.INTEGER) {
        if (ch === '.') {
            return STATE.DECIMAL
        } else if (ch >= '0' && ch <= '9') {
            return STATE.INTEGER
        } else {
            return STATE.UNKNOWN
        }
    }

    if (currentState === STATE.DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.DECIMAL
        } else {
            return STATE.UNKNOWN
        }
    }
    return STATE.UNKNOWN
}

let isNumberValid = (s) => {
    if (s.length === 0) { return true }

    let i = 0
    if (s[i] === '+' || s[i] === '-') { i++ }

    let currentState = STATE.START;

    for (let l = i; l < s.length; l++) {
        currentState = getNextState(currentState, s[l]);
        if (currentState === STATE.UNKNOWN) {
            return false;
        }
    }
    return true;
};

console.log('is valid "4.325" = ' + isNumberValid("4.325"));
console.log('is valid "4.325a" = ' + isNumberValid("4.325a"));
console.log('is valid "x4.325" = ' + isNumberValid("x4.325"));
console.log('is valid "4.32.5" = ' + isNumberValid("4.32.5"));
console.log('is valid "4325" = ' + isNumberValid("4325"));