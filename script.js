const current = document.querySelector('.display-current'); 
const output = document.querySelector('.display-output'); 
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');

let total = 0;
let lastNumber = 0;
let op = "";
let isNewEntry = true;
let isNewCurrent = false;

numbers.forEach(number =>
    number.addEventListener("click", function() {
      addTextToScreen(this);
    })
  );
  
function addTextToScreen(numberElement) {
    lastNumber = "";
        if (isNewCurrent) {
            current.textContent = "";
            isNewCurrent = false;
        } else {
            output.textContent += numberElement.textContent.trim();
            current.textContent += numberElement.textContent.trim();
            isNewEntry = false;
        }
    lastNumber = output.textContent.trim();
}

operators.forEach(op =>
    op.addEventListener("click", function() {
      storeLastNumber(this);
    })
  );
  function storeLastNumber(operatorElement) {
    if (!isNewEntry) {
      total = parseFloat(lastNumber);
      lastNumber = "";
    }
    output.textContent = "";
    op = operatorElement.textContent.trim();
    current.textContent += op;  
    isNewCurrent = false;
}

function performBasicOp() {
    if (op == "+") {
      total = add(total, parseFloat(lastNumber));
    } else if (op == "-") {
      total = sub(total, parseFloat(lastNumber));
    } else if (op == "*") {
      total = mult(total, parseFloat(lastNumber));
    } else if (op == "/") {
        total = divide(total, parseFloat(lastNumber));
    }  else if (op == '^') {
        total = pow(total, parseFloat(lastNumber));
    } else {
      total = parseFloat(lastNumber);
    }
    return total;
}

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 == 0 ? 0 : num1 / num2;
}
function pow(num1, num2) {
    return num1 ** num2;
}

function powerOf() {
    current.textContent = `10^(${output.textContent})`;
    output.textContent = 10 ** parseFloat(current.textContent);
    total = parseFloat(output.textContent);
    isNewEntry = true;
}

function recip() {
    current.textContent = `1/(${current.textContent})`;
    output.textContent = 1 / parseFloat(lastNumber);
    total = parseFloat(output.textContent);
    isNewEntry = true;
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', equals);
function equals(equalElement) {
    equalElement = equalElement || this;
    output.textContent = "";
    let value = performBasicOp();
    output.textContent = value;
    isNewEntry = true;
    isNewCurrent = true;
}

const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', () => {
    current.textContent = current.textContent.slice(0, current.textContent.length - 1);
    total = parseFloat(current.textContent);
    output.textContent = "";
    isNewEntry = true;
});

const clearNumber = document.querySelector('.clearNumber');
clearNumber.addEventListener('click', () => {
    output.textContent = output.textContent.slice(0, output.textContent.length - 1);
    total = parseFloat(output.textContent);
    isNewEntry = true;
});

const clearScreen = document.querySelector('.clearScreen');
clearScreen.addEventListener('click', () => {
    total = 0;
    lastNumber = 0;
    op = "";
    isNewEntry = true;
    output.textContent = "";
    current.textContent = "";
});

const sign = document.querySelector('.sign');
sign.addEventListener('click', () => {
    if (current.textContent.substring(0, 1) == "-") {
            current.textContent = current.textContent.substring(1, expression.textContent.length)
    } else {
        current.textContent = "-" + current.textContent;
    }
});

const sqrt = document.querySelector('.sqrt');
sqrt.addEventListener('click', () => {
    output.textContent = Math.sqrt(parseFloat(output.textContent));
    total = parseFloat(output.textContent);
    isNewEntry = true;
});




