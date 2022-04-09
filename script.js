function renderRow1(){
    const template = document.createElement('div');
    template.classList.add(...['row']);
    template.innerHTML = `
    <div class="flex">
        <img src="./avatar.png" alt="Avatar" class="avatar">
        <div class="qn">
            <div class="a flex">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="b hide">
                <p>Could you please spare a moment to share your thoughts with us?</p>
                <button id="submit" class="btn">SURE THING! :)</button>
            </div>
        </div>
    </div>
    `;
    document.querySelector('.survey-forms').append(template);

    const rows = document.querySelectorAll('.row');

    setTimeout(()=>{
        rows[0].querySelector('.a').classList.add('hide');
        rows[0].querySelector('.b').classList.remove('hide');
    }, 2000);

    document.querySelector('.btn').addEventListener('click', (e)=>{
        e.preventDefault();
        renderRow2();
    });
    document.querySelector('.content').scrollTop = document.querySelector('.content').scrollHeight;
}

function renderRow2(){
    const template = document.createElement('div');
    template.classList.add(...['row']);
    template.innerHTML = `
    <div class="flex">
        <img src="./avatar.png" alt="Avatar" class="avatar">
        <div class="qn">
            <div class="a flex">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="b hide">
                <p>What are the top reasons that made you choose us?</p>
            </div>
        </div>
    </div>
    <div class="alt-ans hide">
        <div class="ans ans-1 flex">
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-star"></i>
                </div>
                <span class="label flex">Fast</span>
            </div>
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-briefcase"></i>
                </div>
                <span class="label flex">Flexible</span>
            </div>
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-check-box"></i>
                </div>
                <span class="label flex">Convenient</span>
            </div>
        </div>
        <div class="ans ans-2 flex">
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-help-alt"></i>
                </div>
                <span class="label flex">Confidential</span>
            </div>
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-file"></i>
                </div>
                <span class="label flex">Reliable</span>
            </div>
            <div class="an rec">
                <div class="flex">
                    <i class="ti ti-link"></i>
                </div>
                <span class="label flex">Simple</span>
            </div>
        </div>
    </div>
    `;
    document.querySelector('.survey-forms').append(template);

    const rows = document.querySelectorAll('.row');
    const ans = document.querySelectorAll('.alt-ans');

    setTimeout(()=>{
        rows[1].querySelector('.a').classList.add('hide');
        rows[1].querySelector('.b').classList.remove('hide');
        ans[0].classList.remove('hide');
    }, 2000);

    ans[0].querySelectorAll('.an.rec').forEach(rec=>{
        rec.addEventListener('click', ()=>{
            rec.classList.add('selected');
            renderRow3();
        });
    });
    document.querySelector('.content').scrollTop = document.querySelector('.content').scrollHeight;
}

function renderRow3(){
    const template = document.createElement('div');
    template.classList.add(...['row']);
    template.innerHTML = `
    <div class="flex">
        <img src="./avatar.png" alt="Avatar" class="avatar">
        <div class="qn">
            <div class="a flex">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="b hide">
                <p>How would you rate the quality of our product?</p>
            </div>
        </div>
    </div>
    <div class="alt-ans hide">
        <div class="ans flex">
            <div class="an star flex">
                <i class="ti ti-star"></i>
            </div>
            <div class="an star flex">
                <i class="ti ti-star"></i>
            </div>
            <div class="an star flex">
                <i class="ti ti-star"></i>
            </div>
            <div class="an star flex">
                <i class="ti ti-star"></i>
            </div>
            <div class="an star flex">
                <i class="ti ti-star"></i>
            </div>
        </div>
    </div>
    `;
    document.querySelector('.survey-forms').append(template);

    const rows = document.querySelectorAll('.row');
    const ans = document.querySelectorAll('.alt-ans');

    setTimeout(()=>{
        rows[2].querySelector('.a').classList.add('hide');
        rows[2].querySelector('.b').classList.remove('hide');
        ans[1].classList.remove('hide');
    }, 2000);

    ans[1].querySelectorAll('.an.star').forEach(star=>{
        star.addEventListener('click', ()=>{
            star.classList.add('selected');
            renderRow4();
        });
    });

    document.querySelector('.content').scrollTop = document.querySelector('.content').scrollHeight;
}

function renderRow4(){
    const template = document.createElement('div');
    template.classList.add(...['row']);
    template.innerHTML = `
    <div class="flex">
        <img src="./avatar.png" alt="Avatar" class="avatar">
        <div class="qn">
            <div class="a flex">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="b hide">
                <p>How satisfied are you with the competency of our customer support?</p>
            </div>
        </div>
    </div>
    <div class="alt-ans hide">
        <div class="ans flex">
            <div class="an num flex">
                <span>0</span>
            </div>
            <div class="an num flex">
                <span>2</span>
            </div>
            <div class="an num flex">
                <span>4</span>
            </div>
            <div class="an num flex">
                <span>6</span>
            </div>
            <div class="an num flex">
                <span>8</span>
            </div>
            <div class="an num flex">
                <span>10</span>
            </div>
        </div>
    </div>
    `;
    document.querySelector('.survey-forms').append(template);

    const rows = document.querySelectorAll('.row');
    const ans = document.querySelectorAll('.alt-ans');

    setTimeout(()=>{
        rows[3].querySelector('.a').classList.add('hide');
        rows[3].querySelector('.b').classList.remove('hide');
        ans[2].classList.remove('hide');
    }, 2000);

    ans[2].querySelectorAll('.an.num').forEach(num=>{
        num.addEventListener('click', ()=>{
            num.classList.add('selected');
            renderRow4();
        });
    });
    document.querySelector('.content').scrollTop = document.querySelector('.content').scrollHeight;
}


// REFACTOR FORMAT !!!
function callback1(e){
    e.preventDefault();
    renderRow2();
}
function callback2(e){
    if(e.target == document.querySelector('.an.rec')){
        e.target.classList.add('selected');
        renderRow3();
    }
}
function callback3(e){
    if(e.target == document.querySelector('.an.star .ti')){
        e.target.classList.add('selected');
        renderRow4();
    }
}
function callback4(e){
    if(e.target == document.querySelector('.an.num')){
        e.target.classList.add('selected');
    }
}
