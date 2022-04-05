document.addEventListener('DOMContentLoaded', ()=>{
    const ratings = document.querySelectorAll('.ans .an.star');
    ratings[1].addEventListener('click', ()=>{
        console.log(ratings);
        ratings[0].classList.add('.selected');
        ratings[1].classList.add('.selected');
    });
    
});