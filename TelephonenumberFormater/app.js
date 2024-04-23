const numberInput = document.querySelector(".mobileNumber-fild");

let previousValue = '' ; 
let firstThreeNumber ='';


// hare i put input event that fire every key strock
numberInput.addEventListener('input',(e)=>{
    const inputValue = e.target.value;

    if (/\d+$/g.test(inputValue)){
        numberInput.value = inputValue;
    }else{
        numberInput.value = inputValue.substring(0,inputValue.length-1);
    }
   
    if(inputValue.length === 4 && previousValue.length < inputValue.length ){
        firstThreeNumber = inputValue.substring(0,3);
        numberInput.value = `+(${firstThreeNumber})-${inputValue[inputValue.length-1]}`;
    }else if (inputValue.length === 7  && previousValue.length > inputValue.length){
        numberInput.value = firstThreeNumber;
    }

    previousValue = inputValue;

})