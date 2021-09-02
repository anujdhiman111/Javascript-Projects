let toggle = document.querySelector('.hamburger');
let link = document.querySelector('.nav-div');
toggle.addEventListener('click',function(){
    link.classList.toggle("nav-div-show");
});