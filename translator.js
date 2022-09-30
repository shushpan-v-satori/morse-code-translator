const alphabet = {
    A: "._" ,
    N: "_." ,
    B: "_..." ,
    O: "___" ,
    C: "_._." ,
    P: ".__." ,
    D: "_.." ,
    Q: "__._" ,
    E: "." ,
    R: "._." ,
    F: ".._." ,
    S: "..." ,
    G: "__." ,
    T: "_" ,
    H: "...." ,
    U: ".._" ,
    I: ".." ,
    V: "..._" ,
    J: ".___" ,
    W: ".__" ,
    K: "_._" ,
    X: "_.._" ,
    L: "._.." ,
    Y: "_.__" ,
    M: "__" ,
    Z: "__.."
};

const entries = Object.entries(alphabet);
const keys = Object.keys(alphabet);
const values = Object.values(alphabet);

export const translateToMorse = (inputString) => {
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
        return (morseValues[0][1]+" ");
    }
    else {
        return "#";
    }
});
return theOutputString.toString().replace(/,/g,"");
};

export const translateToEnglish = (inputString) => {
    const  inputStringArr = inputString.split(/([ ]|[/|])/);
    console.log(inputStringArr);
    const cleanInputStringArr = inputStringArr.filter((inputLetter) => {
        if (inputLetter !== " " && inputLetter !==""){
            return inputLetter;
        }
    });
    const theOutputString = cleanInputStringArr.map((inputLetter) => {
        if (inputLetter == "|") {
            return " ";
        }
        else if (values.includes(inputLetter)) {
            const englishValues = entries.filter((entry) => {
                if (inputLetter == entry[1] ) {
                    return entry[0];
                };
            });
            return englishValues[0][0];
        }
        else {
            return "#";
        }
    });
    return theOutputString.toString().replace(/,/g,"");
    };

    const myresult = translateToEnglish(".__ |... ...|");
    console.log(myresult);