const btn1 = document.getElementById('inc-btn');
const btn2 = document.getElementById('dec-btn');
const btn3 = document.getElementById('reset');
const text = document.getElementById('increase');

let num = 0;

btn1.addEventListener('click',() =>{
    num++;
    text.innerHTML = num;
});
btn2.addEventListener('click',() =>{
    if(num > 0){
        num--;
        text.innerHTML = num;
    }
    else{
        alert("You reaches the minimum limit");
    }
});
btn3.addEventListener('click',() =>{
    num = 0
    text.innerHTML = num;
});