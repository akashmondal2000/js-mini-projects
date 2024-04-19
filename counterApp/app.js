const plusButton = document.querySelector(".plus-btn");
const minusButton = document.querySelector('.minus-btn');
const count = document.querySelector('.count');


const increment = ()=>{
    
   count.innerText = parseInt(count.innerText) + 1;
}
const decrement = () =>{
    count.innerText = parseInt(count.innerText) - 1;
}


plusButton.addEventListener("click",increment);
minusButton.addEventListener('click',decrement);