document.addEventListener('DOMContentLoaded', ()=>{
    const rows = document.querySelectorAll('.row');
    rows[1].remove();
    rows[2].remove();
    rows[3].remove();
    rows[4].remove();

    setTimeout(()=>{
        rows[0].remove();
        document.querySelector('form').append(rows[1]);

        // Listen for events
        document.querySelector('.btn').addEventListener('click', e=>{
            e.preventDefault();
            rows[1].remove();
            document.querySelector('form').append(rows[2]);

            const ans = document.querySelectorAll('.an');
            ans.forEach(an => {
                an.addEventListener('click', ()=> {
                    rows[2].remove();
                    document.querySelector('form').append(rows[3]);

                    const nums = document.querySelectorAll('.star');
                    nums.forEach(num => {
                        num.addEventListener('click', ()=> {
                            rows[3].remove();
                            document.querySelector('form').append(rows[4]);
                        });
                    });
                });
            });
        });

        

    }, 2000);

    

    

    











});