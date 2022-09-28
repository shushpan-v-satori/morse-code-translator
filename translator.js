const alphabet = {
    A: ". _" ,
    N: "_ ." ,
    B: "_ . . ." ,
    O: "_ _ _" ,
    C: "_ . _ ." ,
    P: ". _ _ ." ,
    D: "_ . ." ,
    Q: "_ _ . _" ,
    E: "." ,
    R: ". _ ." ,
    F: ". . _ ." ,
    S: ". . ." ,
    G: "_ _ ." ,
    T: "_" ,
    H: ". . . ." ,
    U: ". . _" ,
    I: ". ." ,
    V: ". . . _" ,
    J: ". _ _ _" ,
    W: ". _ _" ,
    K: "_ . _" ,
    X: "_ . . _" ,
    L: ". _ . ." ,
    Y: "_ . _ _" ,
    M: "_ _" ,
    Z: "_ _ . ."
};

const entries = Object.entries(alphabet);
// console.log(entries);
const keys = Object.keys(alphabet);
const values = Object.values(alphabet);

let inputString = [];
// let theOutputSymbol = "";
const pattern = /[^a-zA-Z]/g;

export const translate = (inputString) => {
const  inputStringArr = inputString.toUpperCase().split("");
const theOutputString = inputStringArr.map((inputLetter) => {
    if (inputLetter == " ") {
        // console.log("---1");
        return "|";
    }
    else if (keys.includes(inputLetter)) {
        const morseValues = entries.filter((entry) => {
            if (inputLetter == entry[0] ) {
                // console.log(entry[1] + "---2");
                return entry[1];
            };
        });
        return morseValues[0][1];
    }
    else if (pattern.test(inputLetter)) {
        // console.log("---3");
        return "#";
    }
});

return theOutputString.toString().replace(/,/g,"");
};

// const myresult = translate('A C@');
// console.log(myresult);