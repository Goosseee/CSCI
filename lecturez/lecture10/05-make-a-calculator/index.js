const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    let sum = firstNumber + secondNumber;
    document.querySelector('#answer').textContent= sum;

    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
}

const subtractNumbers = (ev) => {
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    let diff = firstNumber - secondNumber;
    document.querySelector('#answer').textContent= diff;
    // Same as above but subtract!
}

const multiplyNumbers = (ev) => {
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    let pro = firstNumber*secondNumber;
    document.querySelector('#answer').textContent= pro;
    // Same as above but multiply!
}

const divideNumbers = (ev) => {
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    let quo = firstNumber / secondNumber;
    document.querySelector('#answer').textContent= quo;
    // Same as above but divide!
}

