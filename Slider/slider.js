let review = [
    {
        id:1,
        title:1,
        img:"image.jpg",
    },
    {
        id:2,
        title:2,
        img:"image1.jpg",
    },
    {
        id:3,
        title:3,
        img:"image2.jpg",
    },
    {
        id:4,
        title:4,
        img:"image3.jpg",
    },
]

const img = document.getElementById("slider");
const name = document.getElementById("heading");
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nxtbtn");

let currItem = 0;

window.addEventListener("DOMConentLoaded", function(){
    showImg(currItem);
    setInterval("slide()",1000);
});

function showImg(person){
    const item = review[person];
    img.src = item.img;
    name.textContent = item.title;
}


nextbtn.addEventListener('click' ,function(){
    currItem++;
    if(currItem > review.length-1){
        currItem = 0;
    }
    showImg(currItem);
});
prevbtn.addEventListener('click' ,function(){
    currItem--;
    if(currItem < 0){
        currItem = review.length-1;
    }
    showImg(currItem);
});

