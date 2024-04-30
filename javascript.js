function add(num1,num2){return Number(num1) + Number(num2)}
function subtract(num1,num2){return Number(num1) - Number(num2)}
function multiply(num1,num2){return Number(num1)*Number(num2)}
function divide(num1,num2){return Number(num1)/Number(num2)}

function operate(inputFunction,num1,num2){
    return inputFunction(num1,num2);
}


const outputSquare = document.querySelector(".output");
const buttonGrid = document.querySelector(".button-grid");

let currNum1;
let currNum2;
let displayValue = '';
let currOperator;
let clearState = false;


buttonGrid.addEventListener("click",(e) => {
    const isButton = e.target.nodeName === "BUTTON";

    if(isButton && clearState && !isNaN(e.target.textContent)){
        displayValue = '';
        outputSquare.textContent = displayValue;
        console.log(0);
        clearState = false;
    }

    if (e.target.textContent === "clr" || !isButton){
        return;
    }
    if(!isNaN(e.target.textContent)){
        displayValue = displayValue + e.target.textContent;
        outputSquare.textContent = displayValue;
        console.log(1);
    } else if (operandDecoder(e.target.textContent) && currNum1 === undefined){
        currNum1 = displayValue;
        currOperator = operandDecoder(e.target.textContent);
        clearState = true;
        console.log(2);
    } else {
        console.log(3);
    // } else if (operandDecoder(e.target.textContent)){
        console.log(2.5)
        currNum2 = displayValue;
        displayValue = operate(currOperator,currNum1,currNum2);
        currNum1 = displayValue;
        outputSquare.textContent = displayValue;
        clearState = true;
        if (operandDecoder(e.target.textContent)){
            currOperator = operandDecoder(e.target.textContent);
        }
    }
    // } else if (e.target.textContent === "="){
        // console.log("=");
        // currNum2 = displayValue;
    // }
})


const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");


clearButton.addEventListener("click",(e) =>{
    currNum1 = undefined;
    currNum2 = undefined;
    currOperator = undefined;
    displayValue = "";
    outputSquare.textContent = displayValue;
})

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