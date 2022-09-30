import{translateToMorse} from "./translator.js";
import{translateToEnglish} from "./translator.js";

const toggleButton = document.querySelector(".languages__toggle")
console.log(toggleButton);

const translateEnglishButton = document.querySelectorAll(".input__translate")[0];
console.log(translateEnglishButton);

const inputStringDom = document.querySelectorAll(".input__string")[0];
console.log(inputStringDom);
console.log(inputStringDom);

const outputDom = document.querySelector(".output");
console.log(outputDom);

const inputDom = document.querySelector(".input")

let inputString = '';
let outputString='';
let isClearOn = false;
let isToMorse = true;

toggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isToMorse) {
        toggleButton.innerHTML="from";
        isToMorse = false;
    }
    else {
        toggleButton.innerHTML="to";
        isToMorse = true;
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
            console.log(inputString);
            outputDom.innerHTML=(`
            <div class="output__string">
            </div>`);
            const outputStringDom = document.querySelectorAll(".output__string")[0];
            if (isToMorse) {
            outputString = translateToMorse(inputString); //need to link the translate function
            }
            else {
            outputString = translateToEnglish(inputString); 
            }
            outputStringDom.innerHTML=outputString;
            translateEnglishButton.innerHTML="Clear";
            isClearOn = true;
            inputStringDom.disabled = true;
            outputDom.style.borderBottom="1px solid #d9d9d9";
            }
        }
});


