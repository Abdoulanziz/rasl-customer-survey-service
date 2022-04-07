document.addEventListener('DOMContentLoaded', ()=>{
    const allAltQns = document.querySelectorAll('.survey-form .row');
    for(let i=0; i<allAltQns.length; i++){
        allAltQns[i].remove();
    }

    render(allAltQns[0], animate);
   
    document.querySelector('.btn').addEventListener('click', (e)=>{
        e.preventDefault();
        render(allAltQns[1], animate);
    });
    
    

    function render(row, callback){
        document.querySelector('.survey-form').append(row);
        callback();
    }

    function animate(){
        document.querySelectorAll('.b').forEach(b=>{
            b.classList.add('hide');
        });
        document.querySelectorAll('.alt-ans').forEach(c=>{
            c.classList.add('hide');
        });
        setTimeout( ()=>{
            document.querySelectorAll('.a').forEach(a=>{
                a.classList.add('hide');
            });
            document.querySelectorAll('.b').forEach(b=>{
                b.classList.add('show');
            });
            document.querySelectorAll('.alt-ans').forEach(c=>{
                c.classList.add('show');
                c.addEventListener('click', (e)=> {
                    render(allAltQns[2], animate);
                });
            });
        }, 2000);
    }


    // const qn3AtlAns = document.querySelectorAll('.an.star');
    // for(let i=0; i<qn3AtlAns.length; i++){
    //     qn3AtlAns[i].addEventListener('click', ()=> {
    //         qn3AtlAns.forEach(an => {
    //             an.classList.remove('selected');
    //         });
    //         if(!qn3AtlAns[i].classList.contains('selected')){
                
    //             switch(i){
    //                 case 0: {
    //                     qn3AtlAns[0].classList.add('selected');
    //                     break;
    //                 }
    //                 case 1: {
    //                     qn3AtlAns[0].classList.add('selected');
    //                     qn3AtlAns[1].classList.add('selected');
    //                     break;
    //                 }
    //                 case 2: {
    //                     qn3AtlAns[0].classList.add('selected');
    //                     qn3AtlAns[1].classList.add('selected');
    //                     qn3AtlAns[2].classList.add('selected');
    //                     break;
    //                 }
    //                 case 3: {
    //                     qn3AtlAns[0].classList.add('selected');
    //                     qn3AtlAns[1].classList.add('selected');
    //                     qn3AtlAns[2].classList.add('selected');
    //                     qn3AtlAns[3].classList.add('selected');
    //                     break;
    //                 }
    //                 case 4: {
    //                     qn3AtlAns[0].classList.add('selected');
    //                     qn3AtlAns[1].classList.add('selected');
    //                     qn3AtlAns[2].classList.add('selected');
    //                     qn3AtlAns[3].classList.add('selected');
    //                     qn3AtlAns[4].classList.add('selected');
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    // }

    // const qn4AtlAns = document.querySelectorAll('.an.num');
    // qn4AtlAns.forEach(an => {
    //     an.addEventListener('click', ()=> {
    //         qn4AtlAns.forEach(an => {
    //             an.classList.remove('selected');
    //         });
    //         if(!an.classList.contains('selected')) an.classList.add('selected');
    //     });
    // });
});