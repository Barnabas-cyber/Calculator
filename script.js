// calculator functionality
//computation/results variable
let computation;
class Calculator {
    //clear method
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';

    }


    //addition function
    addition(previous, current) {
        computation = previous + current
        return computation;
    }
    //subtration function
    subtraction() {
        computation = previous - current
        return computation
    }
    //multiply function
    multiplication() {
        computation = previous * current
        return computation;
    }
    // divide function
    division() {
        computation = previous / current
        return computation;
    }
    //delete method
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    //operate function
    operate() {

    }

    //display number as a float or integer

    //update display

}
// console.log(addition(5, 10));
//varibales representing buttons
let numberButttons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-opeartion]')
let deleteButton = document.querySelector('[data-delete]')
let equalButton = document.querySelector('data-equal')
let clearAllButton = document.querySelector['data-clear-all']
let currentOperandTextElement = document.querySelector['data-current-operand']
let previousOperandTextElement = document.querySelector['data-previous-operand']

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)