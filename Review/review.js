let review  = [
    {
        id:1,
        name:"Anuj Dhiman",
        job:"WEB DEVELOPER",
        img:"customer.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        id:2,
        name:"Priyank Dhiman",
        job:"APP DESIGNER",
        img:"customer1.jpeg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        id:3,
        name:"Paarav Dhiman",
        job:"GRAPHIC DESIGNER",
        img:"customer3.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        id:4,
        name:"Aarav Dhiman",
        job:"APP DEVELOPER",
        img:"customer4.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        id:5,
        name:"Arnav Dhiman",
        job:"WEB DESIGNER",
        img:"customer5.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
];

const img = document.getElementById('person-img');
const name = document.getElementById('person-name');
const job = document.getElementById('job');
const para = document.getElementById('info');

const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const rndm = document.querySelector('.random')

let currItem = 0;

window.addEventListener("DOMConentLoaded", function(){
    showperson(currItem);
});

function showperson(person){
    const item = review[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    para.textContent = item.text;
}

next.addEventListener('click' ,function(){
    currItem++;
    if(currItem > review.length-1){
        currItem = 0;
    }
    showperson(currItem);
});
prev.addEventListener('click' ,function(){
    currItem--;
    if(currItem < 0){
        currItem = review.length-1;
    }
    showperson(currItem);
});

rndm.addEventListener('click', function(){
    currItem = Math.floor(Math.random() * review.length);;
    showperson(currItem);
});