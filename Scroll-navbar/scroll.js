const date1 = document.getElementById("date");
date1.innerHTML = new Date().getFullYear();

const navTogl = document.querySelector('.nav-toggle');
const linkCont = document.querySelector('.nav-cont');
navTogl.addEventListener('click',function(){
    linkCont.classList.toggle("show-nav-cont");
});

const navbar = document.getElementById('nav');
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);
     const scrollHeight = window.pageYOffset;
     const navbarHeight = navbar.getBoundingClientRect().height;
     if(scrollHeight > navbarHeight){
         navbar.classList.add('fixed-nav');
     }
     else{
        navbar.classList.remove('fixed-nav');
     }
});

const scrollLink = document.querySelectorAll('.alink');
scrollLink.forEach(function (links){
    links.addEventListener('click',function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const fixed = navbar.classList.contains('fixed-nav')
        const navbarHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navbarHeight;
        if(!fixed){
            position = position - navbarHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

