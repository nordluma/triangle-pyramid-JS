const triangle = (num) => {
    for (let x = 1; x <= num; x++) {
        let string = "";
        for (let y = 1; y <= x; y++) {
            string += "x ";
        }
        string += "\n";
        console.log(string);
    }
};

const pyramid = (num) => {
    for (let i = 0; i < num; i++) {
        let string = "";

        for (let j = 0; j < num - i; j++) {
            string += " ";
        }

        for (let k = 0; k <= i; k++) {
            string += "x ";
        }
        console.log(string);
    }
};

triangle(5);
console.log("\n");
pyramid(5);
