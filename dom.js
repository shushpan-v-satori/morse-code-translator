import{translate} from "./translator.js";

const translateEnglishButton = document.querySelectorAll(".input__translate")[0];
console.log(translateEnglishButton);

const inputStringDom = document.querySelectorAll(".input__string")[0];
console.log(inputStringDom);
console.log(inputStringDom.disabled);

const outputDom = document.querySelector(".output");
console.log(outputDom);

let inputString = '';
let outputString='';
let isClearOn = false;

translateEnglishButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isClearOn){
        inputStringDom.value="";
        translateEnglishButton.innerHTML="Translate";
        outputDom.innerHTML="";
        isClearOn = false;
        inputStringDom.disabled = false;
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
            <h1>Morse</h1>
            <div class="output__string">
            </div>`);
            const outputStringDom = document.querySelectorAll(".output__string")[0];
            console.log(outputStringDom);
            outputString = translate(inputString); //need to link the translate function
            outputStringDom.innerHTML=outputString;
            translateEnglishButton.innerHTML="Clear";
            isClearOn = true;
            inputStringDom.disabled = true;
            }
        }
});


