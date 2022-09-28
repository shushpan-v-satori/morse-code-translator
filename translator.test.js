import {it, expect} from "@jest/globals";
import{translate} from "./translator"

//the function translateToMorse

const testAlphabet = [
    { englishLetter: "A", morseLetter: ". _" },
    { englishLetter: "N", morseLetter: "_ ." },
    { englishLetter: "B", morseLetter: "_ . . ." },
    { englishLetter: "O", morseLetter: "_ _ _" },
    { englishLetter: "C", morseLetter: "_ . _ ." },
    { englishLetter: "P", morseLetter: ". _ _ ." },
    { englishLetter: "D", morseLetter: "_ . ." },
    { englishLetter: "Q", morseLetter: "_ _ . _" },
    { englishLetter: "E", morseLetter: "." },
    { englishLetter: "R", morseLetter: ". _ ." },
    { englishLetter: "F", morseLetter: ". . _ ." },
    { englishLetter: "S", morseLetter: ". . ." },
    { englishLetter: "G", morseLetter: "_ _ ." },
    { englishLetter: "T", morseLetter: "_" },
    { englishLetter: "H", morseLetter: ". . . ." },
    { englishLetter: "U", morseLetter: ". . _" },
    { englishLetter: "I", morseLetter: ". ." },
    { englishLetter: "V", morseLetter: ". . . _" },
    { englishLetter: "J", morseLetter: ". _ _ _" },
    { englishLetter: "W", morseLetter: ". _ _" },
    { englishLetter: "K", morseLetter: "_ . _" },
    { englishLetter: "X", morseLetter: "_ . . _" },
    { englishLetter: "L", morseLetter: ". _ . ." },
    { englishLetter: "Y", morseLetter: "_ . _ _" },
    { englishLetter: "M", morseLetter: "_ _" },
    { englishLetter: "Z", morseLetter: "_ _ . ." }
  ];
 
const specialCharacters = String(`@(~!#$%^&*_-+="'<>,.?/)`);
const testSpecialChars = specialCharacters.split("");
console.log(testSpecialChars);

it ("translates A" , () => {
    const result = translate ("A");
    expect(result).toBe(". _");
});

it ("translates %" , () => {
    const result = translate ("%");
    expect(result).toBe("#");
});

testAlphabet.forEach((letter) => {
    it (`translate ${letter.englishLetter} to morse code`, () => {
        const result=translate(letter.englishLetter);
        expect(result).toBe(letter.morseLetter);
    });
});

it ("translates Two Words into morse" , () => {
    const result = translate ("Two Words");
    expect(result).toBe("_. _ __ _ _|. _ __ _ _. _ ._ . .. . .");
});


// testSpecialChars.forEach((character) => {
//     it (`translate ${character} to morse code`, () => {
//         const result=translate(character);
//         expect(result).toBe("#");
//     });
// });


// it ("error for unrecognozed symbols" , () => {
//     const result = translate ();
//     expect(result).toBe("######");
// });
