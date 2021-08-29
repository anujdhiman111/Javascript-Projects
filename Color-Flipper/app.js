
const color = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const change1 = document.getElementById('change-color');
const result = document.getElementById('main-sec');
const text = document.querySelector('.clr-name');

const getRand = () => {
    return Math.floor(Math.random() * color.length);
}

change1.addEventListener('click', () => {
    let hex = '#';
    for(let i = 0; i < 6; i++){
        hex += color[getRand()];
    }
    result.style.backgroundColor = hex;
    text.innerHTML = hex;

});