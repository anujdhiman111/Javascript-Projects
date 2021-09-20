const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const date = new Date(2021,9,24,11,30,0);
const hour = date.getHours();
const year = date.getFullYear();
const min = date.getMinutes();
const currDate = date.getDate();

let month = date.getMonth();
month = months[month];
let week = date.getDay();
week = weeks[week];

giveaway.textContent = `Giveaway Ends On ${week}, ${currDate} ${month} ${year} ${hour}:${min}am`

const futuretime = date.getTime();

function getTime(){
    const curr = new Date().getTime();
    const diff = futuretime-curr;

    const oneday = 24*60*60*1000;
    const onehour = 60*60*1000;
    const onemin = 60*1000;

    let remday = Math.floor(diff/oneday);
    let remhour = Math.floor((diff % oneday) /onehour);
    let remmin = Math.floor((diff % onehour) / onemin);
    let remsec = Math.floor((diff % onemin) / 1000);

    const value = [remday,remhour,remmin,remsec];
    items.forEach(function(item,index){
        item.innerHTML = value[index];
    });

    if(diff < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired">Sorry, This giveaway has expired</h4>`
    }      
}
let countdown = setInterval(getTime,1000);
getTime();