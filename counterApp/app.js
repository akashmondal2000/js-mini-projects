const plusButton = document.querySelector(".plus-btn");
const minusButton = document.querySelector('.minus-btn');
const count = document.querySelector('.count');
const changeBy = document.querySelector('.change-by');
const resetButton = document.querySelector('.reset-btn');


const increment = ()=>{
    const changeByValue = parseInt(changeBy.value) ;
    
   count.innerText = parseInt(count.innerText) + changeByValue;
}
const decrement = () =>{
    const changeByValue = parseInt(changeBy.value);
    count.innerText = parseInt(count.innerText) - changeByValue;
}
const resetCount = () =>{
    count.innerText = 0;
}


plusButton.addEventListener("click",increment);
minusButton.addEventListener('click',decrement);
resetButton.addEventListener('click',resetCount);