let togglebtn = document.querySelector('.hamburger');
let closeebtn = document.querySelector('.cut');
let sidebar = document.querySelector('.navbar-menu');

togglebtn.addEventListener('click',function(){
    sidebar.classList.add("show-navbar-menu");
})

closeebtn.addEventListener('click',function(){
    sidebar.classList.remove("show-navbar-menu");
})