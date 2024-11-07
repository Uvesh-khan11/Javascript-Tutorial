// const display = document.getElementById('dis')
// display.innerText = "0"
displayValue = "0";
let currentOperand = '';
let firstOperand = null;
let operator = null;

let waitingForSecondOperand = false; // Flag to indicate if waiting for the second operand


function handleClick(e){
    const text = e.innerText;
    if (text === "AC" || text === "CE"){
        displayValue = "0";
        currentOperand = '';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = true; 
    } else if (text === "=") {
        // Perform calculation
        if (firstOperand !== null && operator) {
            const secondOperand = parseFloat(displayValue);
            let result;
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }
            displayValue = result.toString();
            firstOperand = result;
            operator = null;
            waitingForSecondOperand = false; 
        }
    } else if (['+', '-', '*', '/'].includes(text)) {
        // Store the first operand and operator
        if ( waitingForSecondOperand = false) {
            operator = text;
        }
        else{
            firstOperand = parseFloat(currentOperand);
            operator = text;
            waitingForSecondOperand = false; 
        }
    } else {
        // Append the number to the current operand
        if (displayValue === "0" || waitingForSecondOperand) {
            displayValue = text;
            waitingForSecondOperand = false;
            return;
        }
        else{
            displayValue += text;
        }
        document.getElementById('dis').innerText = displayValue;
    }
}
