import { translateToMorse } from "./translator.js";
import { translateToEnglish } from "./translator.js";

const toggleButton = document.querySelector(".languages__toggle");

const inputLanguageDom = document.querySelectorAll(".input__language");

const outputLanguageDom = document.querySelectorAll(".output__language");

const translateEnglishButton =
  document.querySelectorAll(".input__translate")[0];

const inputStringDom = document.querySelectorAll(".input__string")[0];

const outputDom = document.querySelector(".output");

let inputString = "";
let outputString = "";
let isClearOn = false; //button in a Clear state
let isToMorse = true; //translation set from English to Morse

toggleButton.addEventListener("click", (event) => {
  //changing the Input language
  event.preventDefault();
  if (isToMorse) {
    //from Morse to English
    isToMorse = false;
    const updateInputLanguage = inputLanguageDom.forEach((entry) => {
      entry.innerHTML = `<h1>Morse</h1>`;
    });
    const updateOutputLanguage = outputLanguageDom.forEach((entry) => {
      entry.innerHTML = `<h1>English</h1>`;
    });
  } else {
    //from English to Morse
    isToMorse = true;
    const updateInputLanguage = inputLanguageDom.forEach((entry) => {
      entry.innerHTML = `<h1>English</h1>`;
    });
    const updateOutputLanguage = outputLanguageDom.forEach((entry) => {
      entry.innerHTML = `<h1>Morse</h1>`;
    });
  }
});

translateEnglishButton.addEventListener("click", (event) => {
  //translate
  event.preventDefault();
  if (isClearOn) {
    //pressing Clear button
    inputStringDom.value = "";
    translateEnglishButton.innerHTML = "Translate";
    outputDom.innerHTML = "";
    isClearOn = false;
    inputStringDom.disabled = false;
    toggleButton.disabled = false;
    outputDom.style.borderBottom = "none";
  } else {
    //pressing Translate
    if (!inputStringDom.value) {
      //if the Input field is empty
      inputStringDom.attributes[3].value = "You need to enter text";
      isClearOn = false;
    } else {
      //if the Input field is not empty
      inputString = inputStringDom.value;
      outputDom.innerHTML = `
            <div class="output__language"></div>
            <div class="output__string">
            </div>`;
      const outputLanguageDom = document.querySelectorAll(".output__language");
      console.log(outputLanguageDom);
      const outputStringDom = document.querySelector(".output__string");
      if (isToMorse) {
        //translate to Morse
        outputString = translateToMorse(inputString);
        const updateOutputLanguage = outputLanguageDom.forEach((entry) => {
          entry.innerHTML = `<h1>Morse</h1>`;
        });
      } else {
        //translate to English
        outputString = translateToEnglish(inputString);
        const updateOutputLanguage = outputLanguageDom.forEach((entry) => {
          entry.innerHTML = `<h1>English</h1>`;
        });
      }
      outputStringDom.innerHTML = outputString;
      translateEnglishButton.innerHTML = "Clear";
      isClearOn = true;
      inputStringDom.disabled = true;
      toggleButton.disabled = true;
      outputDom.style.borderBottom = "1px solid #d9d9d9";
    }
  }
});
