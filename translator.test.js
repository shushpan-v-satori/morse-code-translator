import {it, expect} from "@jest/globals";
import{translate} from "./translator"

//test data

const testData = [
    { upperCaseLetter: "A", morseLetter: ". _" },
    { upperCaseLetter: "N", morseLetter: "_ ." },
    { upperCaseLetter: "B", morseLetter: "_ . . ." },
    { upperCaseLetter: "O", morseLetter: "_ _ _" },
    { upperCaseLetter: "C", morseLetter: "_ . _ ." },
    { upperCaseLetter: "P", morseLetter: ". _ _ ." },
    { upperCaseLetter: "D", morseLetter: "_ . ." },
    { upperCaseLetter: "Q", morseLetter: "_ _ . _" },
    { upperCaseLetter: "E", morseLetter: "." },
    { upperCaseLetter: "R", morseLetter: ". _ ." },
    { upperCaseLetter: "F", morseLetter: ". . _ ." },
    { upperCaseLetter: "S", morseLetter: ". . ." },
    { upperCaseLetter: "G", morseLetter: "_ _ ." },
    { upperCaseLetter: "T", morseLetter: "_" },
    { upperCaseLetter: "H", morseLetter: ". . . ." },
    { upperCaseLetter: "U", morseLetter: ". . _" },
    { upperCaseLetter: "I", morseLetter: ". ." },
    { upperCaseLetter: "V", morseLetter: ". . . _" },
    { upperCaseLetter: "J", morseLetter: ". _ _ _" },
    { upperCaseLetter: "W", morseLetter: ". _ _" },
    { upperCaseLetter: "K", morseLetter: "_ . _" },
    { upperCaseLetter: "X", morseLetter: "_ . . _" },
    { upperCaseLetter: "L", morseLetter: ". _ . ." },
    { upperCaseLetter: "Y", morseLetter: "_ . _ _" },
    { upperCaseLetter: "M", morseLetter: "_ _" },
    { upperCaseLetter: "Z", morseLetter: "_ _ . ." }
  ];
 
const specialCharacters = String(`/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/`);
const testSpecialChars = specialCharacters.split("");

// Test Suite

testData.forEach((letter) => {
    it (`translate uppercase - ${letter.upperCaseLetter} to morse code`, () => {
        const result=translate(letter.upperCaseLetter);
        expect(result).toBe(letter.morseLetter);
    });
});

testData.forEach((letter) => {
    it (`translate lowercase - ${letter.upperCaseLetter.toLowerCase()} to morse code`, () => {
        const result=translate(letter.upperCaseLetter.toLowerCase());
        expect(result).toBe(letter.morseLetter);
    });
});

it ("translates Two Words into morse" , () => {
    const result = translate ("Two Words");
    expect(result).toBe("_. _ __ _ _|. _ __ _ _. _ ._ . .. . .");
});

testSpecialChars.forEach((character) => {
    it (`translate ${character} to morse code`, () => {
        const result=translate(character);
        expect(result).toBe("#");
    });
});

it ("translate sequence of special characters" , () => {
    const result = translate('@@@ %%% &&&');
    expect(result).toBe('###|###|###');
});

it ("translate all available numbers" , () => {
    const result = translate('0123456789');
    expect(result).toBe('##########');
});

it ("translate interrupted sequence of numbers" , () => {
    const result = translate('000 111 222');
    expect(result).toBe('###|###|###');
});

it ("error for empty string" , () => {
    const result = translate('');
    expect(result).toBe('');
});

