let modlBtn = document.querySelector('.open-btn');
let overlay = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector('.close-btn');

modlBtn.addEventListener('click',function(){
    overlay.classList.add("show-overlay");
});

closeBtn.addEventListener('click',function(){
    overlay.classList.remove("show-overlay");
});
