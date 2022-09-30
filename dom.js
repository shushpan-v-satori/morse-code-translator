import{translateToMorse} from "./translator.js";
import{translateToEnglish} from "./translator.js";

const toggleButton = document.querySelector(".languages__toggle")

const translateEnglishButton = document.querySelectorAll(".input__translate")[0];

const inputStringDom = document.querySelectorAll(".input__string")[0];

const outputDom = document.querySelector(".output");

const inputLanguageDom = document.querySelector(".input__language");

let inputString = '';
let outputString='';
let isClearOn = false;
let isToMorse = true;

toggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isToMorse) {
        toggleButton.innerHTML="from";
        isToMorse = false;
        inputLanguageDom.innerHTML=(`<h1>Morse</h1>`);
    }
    else {
        toggleButton.innerHTML="to";
        isToMorse = true;
        inputLanguageDom.innerHTML=(`<h1>English</h1>`);
    }
    
});

translateEnglishButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isClearOn){
        inputStringDom.value="";
        translateEnglishButton.innerHTML="Translate";
        outputDom.innerHTML="";
        isClearOn = false;
        inputStringDom.disabled = false;
        outputDom.style.borderBottom="none";
    }
    else{
        if (!inputStringDom.value) {
            inputStringDom.attributes[3].value="You need to enter text";
            isClearOn=false;
        }
        else {
            inputString=inputStringDom.value;
            outputDom.innerHTML=(`
            <div class="output__language"></div>
            <div class="output__string">
            </div>`);
            const outputLanguageDom = document.querySelector(".output__language");
            const outputStringDom = document.querySelector(".output__string");
            if (isToMorse) {
            outputString = translateToMorse(inputString); //need to link the translate function
            outputLanguageDom.innerHTML=(`<h1>Morse</h1>`);
            }
            else {
            outputString = translateToEnglish(inputString); 
            outputLanguageDom.innerHTML=(`<h1>English</h1>`);
            }
            outputStringDom.innerHTML=outputString;
            translateEnglishButton.innerHTML="Clear";
            isClearOn = true;
            inputStringDom.disabled = true;
            outputDom.style.borderBottom="1px solid #d9d9d9";
            }
        }
});


