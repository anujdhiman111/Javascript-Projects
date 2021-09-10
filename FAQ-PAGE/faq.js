let tglbtn = document.querySelectorAll('.que-btn');

tglbtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const tar = e.currentTarget.parentElement.parentElement;
        tar.classList.toggle('show-text');
    });
});