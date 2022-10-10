// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0 


function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML="Number of guesses so far: " + count; 
    //your code here
    console.log("your code here!");
    //step 1 Get the number that they entered from the dom 
    // store that in a variable. 

   let guess = document.querySelector('#guess').value;
   console.log(guess);

    //Step 2 convert the guess into a number. 

    guess = Number(guess);
    //step 3 check if they won: 
    //  *if guess === secret -> you win!
    //  *if guess < secret -> 'Too low!'
    //  *else guess > secret -> 'too high!'

    if (guess === secret){
        console.log('you won!');
    //    document.querySelector('#message').innerHTML='You won!  <img id="celebrate" src="https://i.gifer.com/7eEl.gif" />';
       document.querySelector('#celebrate').className= '';
    }else if(guess > secret){
        console.log('too high!');
    }
    else{
        console.log('too low!');
    }

}