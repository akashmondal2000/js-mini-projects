const userInput = document.querySelector('.guess-input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const allGuessesArray = [];

// this randem number generate ramdom whole number between 0 to 100; 
let randomNumber = Math.round(Math.random()*100);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    // console.log('Submitted')
    if(randomNumber === userInputValue){
        result.innerText =  'Congrats';
    } else if ( userInputValue > randomNumber){
       result.innerText= 'Too High';
    }else {
         result.innerText ='Too Low!';
    }
    allGuessesArray.push(userInputValue);
    
    allGuesses.innerText ='Your Guesses: '+ allGuessesArray.join(', ')


    // userInput.value = ''; // for clear the input box 
    form.reset()//for clear the input box this is an another approch

})