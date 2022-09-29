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
const keys = Object.keys(alphabet);

export const translate = (inputString) => {
const  inputStringArr = inputString.toUpperCase().split("");
const theOutputString = inputStringArr.map((inputLetter) => {
    if (inputLetter == " ") {
        return "|";
    }
    else if (keys.includes(inputLetter)) {
        const morseValues = entries.filter((entry) => {
            if (inputLetter == entry[0] ) {
                return entry[1];
            };
        });
        return morseValues[0][1];
    }
    else {
        return "#";
    }
});
return theOutputString.toString().replace(/,/g,"");
};