let plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) {
            digits[i] = 0;
        } else {
          return digits
        }
    }

    digits.unshift(1)
    return digits
};

console.log(plusOne([1, 2, 3]))