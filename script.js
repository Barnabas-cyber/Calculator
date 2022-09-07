// calculator functionality
class Calculator{
//clear method
clear(){
    this.currentOperand = '';

}

//delete method
delete (){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

}

//varibales representing buttons
let numberButttons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-opeartion]')
let deleteButton = document.querySelector('[data-delete]')
let equalButton = document.querySelector('data-equal')
let clearAllButton = document.querySelector['data-clear-all']
let currentOperandTextElement = document.querySelector['data-current-operand']
let previousOperandTextElement = document.querySelector['data-previous-operand']