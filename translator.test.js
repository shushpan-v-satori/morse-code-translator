import {it, expect} from "@jest/globals";
import{translateToEnglish} from "./translator";

//test data

const testData = [
    { upperCaseLetter: "A", morseLetter: "._" },
    { upperCaseLetter: "N", morseLetter: "_." },
    { upperCaseLetter: "B", morseLetter: "_..." },
    { upperCaseLetter: "O", morseLetter: "___" },
    { upperCaseLetter: "C", morseLetter: "_._." },
    { upperCaseLetter: "P", morseLetter: ".__." },
    { upperCaseLetter: "D", morseLetter: "_.." },
    { upperCaseLetter: "Q", morseLetter: "__._" },
    { upperCaseLetter: "E", morseLetter: "." },
    { upperCaseLetter: "R", morseLetter: "._." },
    { upperCaseLetter: "F", morseLetter: ".._." },
    { upperCaseLetter: "S", morseLetter: "..." },
    { upperCaseLetter: "G", morseLetter: "__." },
    { upperCaseLetter: "T", morseLetter: "_" },
    { upperCaseLetter: "H", morseLetter: "...." },
    { upperCaseLetter: "U", morseLetter: ".._" },
    { upperCaseLetter: "I", morseLetter: ".." },
    { upperCaseLetter: "V", morseLetter: "..._" },
    { upperCaseLetter: "J", morseLetter: ".___" },
    { upperCaseLetter: "W", morseLetter: ".__" },
    { upperCaseLetter: "K", morseLetter: "_._" },
    { upperCaseLetter: "X", morseLetter: "_.._" },
    { upperCaseLetter: "L", morseLetter: "._.." },
    { upperCaseLetter: "Y", morseLetter: "_.__" },
    { upperCaseLetter: "M", morseLetter: "__" },
    { upperCaseLetter: "Z", morseLetter: "__.." }
  ];
 
const specialCharacters = String(`/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/`);
const testSpecialChars = specialCharacters.split("");

// Test Suite

testData.forEach((letter) => {
    it (`translate uppercase - ${letter.upperCaseLetter} to morse code`, () => {
        const result=translateToEnglish(letter.upperCaseLetter);
        expect(result).toBe(letter.morseLetter);
    });
});

testData.forEach((letter) => {
    it (`translate lowercase - ${letter.upperCaseLetter.toLowerCase()} to morse code`, () => {
        const result=translateToEnglish(letter.upperCaseLetter.toLowerCase());
        expect(result).toBe(letter.morseLetter);
    });
});

it ("translates Two Words into morse" , () => {
    const result = translateToEnglish ("Two Words");
    expect(result).toBe("_._____|._____._._.....");
});

testSpecialChars.forEach((character) => {
    it (`translate ${character} to morse code`, () => {
        const result=translateToEnglish(character);
        expect(result).toBe("#");
    });
});

it ("translate sequence of special characters" , () => {
    const result = translateToEnglish('@@@ %%% &&&');
    expect(result).toBe('###|###|###');
});

it ("translate all available numbers" , () => {
    const result = translateToEnglish('0123456789');
    expect(result).toBe('##########');
});

it ("translate interrupted sequence of numbers" , () => {
    const result = translateToEnglish('000 111 222');
    expect(result).toBe('###|###|###');
});

it ("error for empty string" , () => {
    const result = translateToEnglish('');
    expect(result).toBe('');
});

