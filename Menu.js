const navEl = document.querySelector('.nav'); 
const toggleEl = document.querySelector(".toggle")
const newTOG = document.querySelector(".active");

toggleEl.addEventListener("click",()=>{
    togglefun();
    
});

function togglefun()
{
        navEl.classList.toggle("active");
        toggleEl.classList.toggle("active");
}
