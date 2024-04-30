function add(num1,num2){return num1 + num2}
function subtract(num1,num2){return num1 - num2}
function multiply(num1,num2){return num1*num2}
function divide(num1,num2){return num1/num2}

function operate(inputFunction,num1,num2){
    return inputFunction(num1,num2);
}


const outputSquare = document.querySelector(".output");
const buttonGrid = document.querySelector(".button-grid");

let currNum1;
let currNum2;
let displayValue = '';
let currOperator;

buttonGrid.addEventListener("click",(e) => {
    const isButton = e.target.nodeName === "BUTTON";
    let clearState = false;

    if(isButton && clearState){
        displayValue = '';
        outputSquare.textContent = displayValue;
    }

    if(isButton && e.target.textContent != "=" 
                && !(operandDecoder(e.target.textContent))){
        displayValue = displayValue + e.target.textContent;
        outputSquare.textContent = displayValue;
    } else if (operandDecoder(e.target.textContent) && currNum1 === undefined){
        currNum1 = displayValue;
        currOperator = operandDecoder(e.target.textContent);
        clearState = true;
    } else if (operandDecoder(e.target.textContent) && currNum1 != undefined){
        displayValue = operate(currOperator,num1,displayValue);
        currNum1 = displayValue;
        outputSquare.textContent = displayValue;
    }
})


const equalButton = document.querySelector("equals");
const clearButton = document.querySelector("clear");


    // equalButton.addEventListener("click",(e) =>{

    // })

function operandDecoder(inputString){
    let output;
    if (inputString==="+"){
        output = add;
    } else if (inputString === "-"){
        output = subtract;
    } else if (inputString === "*"){
        output = multiply;
    } else if (inputString === "/"){
        output = divide;
    } else {
        output = false;
    }
    return output;
}