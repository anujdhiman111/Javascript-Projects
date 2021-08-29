let input = document.getElementById('curr-result');


function pushBtn(obj) {
         
    var pushed = obj.innerHTML;
     
    if (pushed == '=') {
        input.innerHTML = eval(input.innerHTML);
         
    } else if (pushed == 'AC') {
        input.innerHTML = '';
         
    } 
    else if(pushed == "DEL"){
        if(input.innerText != 0){
          input.innerText = input.innerText.slice(0, -1)
        }
        }

    else {
        if (input.innerHTML == '') {
            input.innerHTML = pushed;
             
        } else {
            input.innerHTML += pushed;   
        }
    }
}