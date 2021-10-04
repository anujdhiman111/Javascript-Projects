let us = 0;
let cs = 0;
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > h1");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getCompChoice(){
    const choice = ['r','p','s']
    const rand = Math.floor(Math.random(choice)*choice.length);
    return choice[rand];
}

function toWord(letter){
    if(letter === 'r'){
        return "Rock";
    }
    if(letter === 'p'){
        return "Paper";
    }
    return "Scissor";
}

let smalluser = "User".fontsize(3).sup();
let compuser = "Comp".fontsize(3).sup();

function win(user,comp){
    us++;
    userScore.textContent = us; 
    result.innerHTML = `${toWord(user)}${smalluser} beats ${toWord(comp)}${compuser} You Win.`;
    document.getElementById(user).classList.add('green');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green');
    },400);
}
function loss(user,comp){
    cs++;
    compScore.textContent = cs;
    result.innerHTML = `${toWord(comp)}${compuser} beats ${toWord(user)}${smalluser} You Lose.`;
    document.getElementById(user).classList.add('red');
    setTimeout(function(){
        document.getElementById(user).classList.remove('red');
    },400);
}

function draw(user){
    result.textContent = "Its a Draw"
    document.getElementById(user).classList.add('grey')
    setTimeout(function(){
        document.getElementById(user).classList.remove('grey');
    },400);
}

function Game(userChoice){
    const computerChoice = getCompChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        loss(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;
    }
}

function main(){
    rock.addEventListener('click',function(){
        Game("r")
    });
    paper.addEventListener('click',function(){
        Game("p")
    });
    scissor.addEventListener('click',function(){
        Game("s")
    });
}

main()