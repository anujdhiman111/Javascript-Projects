const about = document.querySelector('.content');
const btn = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.about-content');

about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        btn.forEach(function(button){
            button.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        const elem = document.getElementById(id);
        elem.classList.add('active');
    }
});