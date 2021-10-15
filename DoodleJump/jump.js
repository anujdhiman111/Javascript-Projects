const grid = document.querySelector(".grid");
const doodler = document.createElement("div");
let doodlerLeftSpace = 50;
let startpoint = 150
let doodlerBottomSpace = startpoint;
let gameOver = false;
let platform = 5;
let platformAray = [];
let upTime;
let downTime;
let isJump = true;
let isLeft = false;
let isRight = false;
let leftId;
let rightId;
let score = 0;

document.addEventListener('DOMContentLoaded',() => {
    function createDoodler(){
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodlerLeftSpace = platformAray[0].left;
        doodler.style.left = doodlerLeftSpace + "px";
        doodler.style.bottom = doodlerBottomSpace + "px";
    }
    class Platform {
        constructor(newPlatbottom){
            this.bottom = newPlatbottom;
            this.left = Math.floor(Math.random() * 280);
            this.visual = document.createElement('div');
            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + "px";
            visual.style.bottom = this.bottom + "px";
            grid.appendChild(visual);
        }
    }

    function createPlatforms(){
        for(let i = 0; i < platform;i++){
            let platGap = 648 / platform;
            let newPlatbottom = 60 + i * platGap;
            let newPlatfrm = new Platform(newPlatbottom);
            platformAray.push(newPlatfrm);
        }
    }

    function movePlatforms(){
        if(doodlerBottomSpace > 100){
            platformAray.forEach(platfrm => {
                platfrm.bottom -= 4;
                let visual = platfrm.visual;
                visual.style.bottom = platfrm.bottom + "px"; 
                if(platfrm.bottom < 10){
                    let firstplatform = platformAray[0].visual;
                    firstplatform.classList.remove('platform');
                    platformAray.shift();
                    score++;
                    let newplatform = new Platform(600);
                    platformAray.push(newplatform);
                }
            })
        }
    }

    function jump(){
        clearInterval(downTime);
        isJump = true;
        upTime = setInterval(function(){
            doodlerBottomSpace += 20;
            doodler.style.bottom = doodlerBottomSpace +"px";
            if(doodlerBottomSpace > startpoint + 200){
                fall();
            }
        },30)
    }

    function fall(){
        clearInterval(upTime);
        isJump = false;
        downTime = setInterval(() => {
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace +"px";
            if(doodlerBottomSpace <= 0){
                game();
            }
            platformAray.forEach(platform => {
                if((doodlerBottomSpace >= platform.bottom)&&(doodlerBottomSpace <= platform.bottom +15) &&((doodlerLeftSpace + 80) >= platform.left) &&
                    (doodlerLeftSpace <= (platform.left + 112))&&
                    !isJump
                ){
                    startpoint = doodlerBottomSpace;
                    jump();
                }
            });
        }, 20);
    }

    function game(){
        gameOver = true;
        grid.innerHTML = score;
        clearInterval(upTime);
        clearInterval(downTime);
        clearInterval(leftId);
        clearInterval(rightId);
    }

    function control(e){
        if(e.key === "ArrowLeft"){
            moveleft();
        }
        else if(e.key === "ArrowRight"){
            moveright();
        }
        else if(e.key === "ArrowUp"){
            movestraight();
        }
    }

    function moveleft(){
        if(isRight){
            clearInterval(rightId);
            isRight = false;
        }
        isLeft = true;
        leftId = setInterval(function(){
            if(doodlerLeftSpace >=0){
                doodlerLeftSpace -= 5;
                doodler.style.left = doodlerLeftSpace + 'px';
            }
            else{
                moveright();
            }
        },30)
    }    

    function moveright(){
        if(isLeft){
            clearInterval(leftId);
            isLeft = false;
        }
        isRight = true;
        rightId = setInterval(function(){
            if(doodlerLeftSpace <= 315){
                doodlerLeftSpace += 5;
                doodler.style.left = doodlerLeftSpace + "px";
            }
            else{
                moveleft();
            }
        },30)
    }

    function movestraight(){
        isLeft = false;
        isRight = false;
        clearInterval(rightId);
        clearInterval(leftId);
    }

    function start(){
        if(!gameOver){
            createPlatforms();
            createDoodler();
            setInterval(movePlatforms,30);
            jump();
            document.addEventListener('keyup',control); 
        }
    }
    start();
});