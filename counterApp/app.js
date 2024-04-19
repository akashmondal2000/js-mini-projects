const plusButton = document.querySelector(".plus-btn");
const minusButton = document.querySelector('.minus-btn');


const increment = ()=>{
    console.log("increment button Clicked");
}
const decrement = () =>{
    console.log("Decrement Button is Clicked");
}


plusButton.addEventListener("click",increment);
minusButton.addEventListener('click',decrement);