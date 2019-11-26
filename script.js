const keyboard = document.querySelector('.keyboard');
const resultBtn = document.getElementById("equal");
const current = document.querySelector(".display-current");
const output = document.querySelector(".display-output");
const backSpace = document.querySelector('.backspace');
const clearNumber = document.querySelector('.clearNumber');
const clearScreen = document.querySelector('.clearScreen');
const sqrt = document.querySelector('.sqrt');
const sign = document.querySelector('.sign');

let curNum = 0;
let newNum = false; 
let op = "";


keyboard.addEventListener('click', function(e) {
    if (e.target.className == 'num') {
        addNumToScreen(e.target.textContent);
    } if (e.target.className == 'ops') {
        operation(e.srcElement.textContent);
    }
});

function addNumToScreen(number) {
    current.value += number;
    if(newNum) {
        current.value = number;
        newNum = false;
    } 
};

function operation (operator) {
    let localOp = current.value;
    if (newNum && op !== "=") {
        current.value = curNum;
    } else {
        newNum = true;
        if (op == "+") {
            curNum += parseFloat(localOp);
        } else if (op == "-") {
            curNum -= parseFloat(localOp);
        } else if (op == "*") {
            curNum *= parseFloat(localOp);
        } else if (op == "/") {
            curNum /= parseFloat(localOp);
        }else {
            curNum = parseFloat(localOp);
        };
        output.value = curNum;
        op = operator;
    };
    output.value = curNum;
};

function pow() {
    curNum = current.value;
    output.value = Math.pow(parseFloat(curNum), parseFloat(current.value) )
    newNum = true;
}


function powerOf() {
    curNum = current.value;
    current.value = `10^(${curNum})`;
    output.value = 10 ** parseFloat(curNum);
}

function recip() {
    curNum = current.value;
    current.value = `1/(${curNum})`;
    output.value = 1 / parseFloat(curNum);
}

sign.addEventListener('click', () => {
    if (current.value.substring(0, 1) == "-") {
            current.value = current.value.substring(1, current.value.length)
    } else {
        current.value = "-" + current.value;
    }
});

function clear() {
    current.value = "";
    newNum = true;
    curNum = 0;
    memoryOperation = "";
};

backSpace.addEventListener('click', () => {
    current.value = current.value.slice(0, current.value.length - 1);
    output.value = "";
    newNum = true;
});

clearNumber.addEventListener('click', () => {
    output.value = output.value.slice(0, output.value.length - 1);
    newNum = true;
});

clearScreen.addEventListener('click', () => {
    curNum = 0;
    memoryOperation = "";
    newNum = true;
    output.value = "";
    current.value = "";
});

sqrt.addEventListener('click', () => {
    curNum = current.value;
    output.value = Math.sqrt(parseFloat(curNum));
    newNum = true;
});




