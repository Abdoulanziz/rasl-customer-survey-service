document.addEventListener('DOMContentLoaded', ()=>{
    const rows = document.querySelectorAll('.row');
    rows[1].remove();
    rows[2].remove();

    setTimeout(()=>{
        rows[0].remove();
        document.querySelector('form').append(rows[1]);

        // Listen for events
        document.querySelector('.btn').addEventListener('click', e=>{
            e.preventDefault();
            rows[1].remove();
            document.querySelector('form').append(rows[2]);
        });
    }, 2000);











});