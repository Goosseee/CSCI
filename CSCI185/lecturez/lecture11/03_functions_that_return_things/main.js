function getArea() {
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);

    let area = (firstNumber*secondNumber)/2;
    document.querySelector('#answer').textContent= area;
}

function getHypo() {
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);

    let hypo = (firstNumber**2 + secondNumber **2)**.5;
    document.querySelector('#answer').textContent= hypo;
}


function getPerim(){ 
    let firstNumber=document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber=document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);

    let perim = firstNumber + secondNumber;
    const result = getHypo();
    document.querySelector('#answer').textContent= result + perim;
}




/* 


1. Create a custom function called "getArea" that calculates 
the area of any right triangle. Your function will take 2 arguments:
    * side1
    * side2

    Formula: side1 * side2 / 2

2. Create a custom function called "getHypotenuse" that calculates 
the hypotenuse of any right triangle. Your function will take 2 arguments:
    * side1
    * side2
    * 
    Formula: (side1 ** 2 + side2 ** 2) ** 0.5

3. Create a custom function called "getPerimeter" that calculates 
the perimeter of any right triangle. Your function will take 2 arguments:
    * side1
    * side2 
    * 
    Formula: side1 + side2 + hypotenuse

    Hint: Can you figure out a way to use getHypotenuse 
    function within the function body?


4. When you're done, test your functions using the console by invoking 
   each of them with different values for side1 and side2.

5. Bonus: See if you can create a way for your user to tell you the
          length of the two sides. Then, display the results back to the
          user.
*/


