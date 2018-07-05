let isNumber = (s) => {
    return s.trim() !== '' && !isNaN(+s)
};

console.log(isNumber('e'))