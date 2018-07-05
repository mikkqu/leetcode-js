
let intToRoman = (num) => {
    const ROMANS = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]

    let result = "";

    for (let i = 0; i < ROMANS.length; i++) {
        let [ roman, n ] = ROMANS[i];

        while (num >= n) {
            result += roman;
            num -= n;
        }
    }

    return result;
};

let intToRoman2 = (num) => {
    let M = ["", "M", "MM", "MMM"]
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return M[Math.floor(num / 1000)] +
           C[Math.floor((num % 1000) / 100)] +
           X[Math.floor((num % 100) / 10)] +
           I[num % 10];
}

console.log(intToRoman2(30))