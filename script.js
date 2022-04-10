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
        rows[0].classList.add('hide');
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

    const ansAnRec = ans[0].querySelectorAll('.an.rec');
    for(let i=0; i<ansAnRec.length; i++){
        ansAnRec[i].addEventListener('click', ()=>{
            ansAnRec[0].classList.remove('selected');
            ansAnRec[1].classList.remove('selected');
            ansAnRec[2].classList.remove('selected');
            ansAnRec[3].classList.remove('selected');
            ansAnRec[4].classList.remove('selected');
            ansAnRec[5].classList.remove('selected');
            ansAnRec[i].classList.add('selected');
            if(!document.querySelectorAll('.row')[2]) renderRow3();
        });
    }
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

    const ansAnStar = ans[1].querySelectorAll('.an.star');
    for(let i=0; i<ansAnStar.length; i++){
        ansAnStar[i].addEventListener('click', ()=>{
            ansAnStar[0].classList.remove('selected');
            ansAnStar[1].classList.remove('selected');
            ansAnStar[2].classList.remove('selected');
            ansAnStar[3].classList.remove('selected');
            ansAnStar[4].classList.remove('selected');

            switch(i){
                case 0: {
                    ansAnStar[0].classList.add('selected');
                    break;
                }
                case 1: {
                    ansAnStar[0].classList.add('selected');
                    ansAnStar[1].classList.add('selected');
                    break;
                }
                case 2: {
                    ansAnStar[0].classList.add('selected');
                    ansAnStar[1].classList.add('selected');
                    ansAnStar[2].classList.add('selected');
                    break;
                }
                case 3: {
                    ansAnStar[0].classList.add('selected');
                    ansAnStar[1].classList.add('selected');
                    ansAnStar[2].classList.add('selected');
                    ansAnStar[3].classList.add('selected');
                    break;
                }
                case 4: {
                    ansAnStar[0].classList.add('selected');
                    ansAnStar[1].classList.add('selected');
                    ansAnStar[2].classList.add('selected');
                    ansAnStar[3].classList.add('selected');
                    ansAnStar[4].classList.add('selected');
                    break;
                }
            }
            if(!document.querySelectorAll('.row')[3]) renderRow4();
        });
    }

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

    const ansAnNum = ans[2].querySelectorAll('.an.num');
    for(let i=0; i<ansAnNum.length; i++){
        ansAnNum[i].addEventListener('click', ()=>{
            ansAnNum[0].classList.remove('selected');
            ansAnNum[1].classList.remove('selected');
            ansAnNum[2].classList.remove('selected');
            ansAnNum[3].classList.remove('selected');
            ansAnNum[4].classList.remove('selected');
            ansAnNum[5].classList.remove('selected');
            ansAnNum[i].classList.add('selected');
            document.querySelector('.footer').classList.remove('hide');
            document.querySelector('.content').scrollTop = document.querySelector('.content').scrollHeight;
        });
    }
}


