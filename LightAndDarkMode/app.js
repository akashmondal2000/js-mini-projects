const fullDerkMode = document.getElementById('full-derk-mode');


fullDerkMode.addEventListener('change',()=>{
    if(fullDerkMode.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark')
    }
})