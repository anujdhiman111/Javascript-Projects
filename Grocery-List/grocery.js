const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('submit-btn');
const cont = document.querySelector('.grocery-cont');
const list = document.querySelector('.grocery-list');
const clearbtn = document.querySelector('.clear');

let editElem;
let editFlag = false;
let editId = "";

form.addEventListener('submit',addItem);
clearbtn.addEventListener('click',clearAll);

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && editFlag == false){
        const element = document.createElement("article");
        element.classList.add('grocery-item')
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="para">${value}</p>
        <div class="btn-cont">
            <button type="btn" class="edit">
                <img src="edit.svg" class="image">
            </button>
            <button type="button" class="delete">
                <img src="trash.svg" class="image">
            </button>
        </div>`
        const deleteBtn = element.querySelector('.delete');
        const editBtn = element.querySelector('.edit');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        list.appendChild(element);
        cont.classList.add('show-cont')
        displayAlert("Item Added");
        setBackToDefault();
    }
    else if(value && editFlag == true){
        editElem.innerHTML = value;
        displayAlert("Value Changed");
        setBackToDefault();
    }
    else{
        displayAlert("Please Enter Value")
    }
}
function clearAll(){
    const item = document.querySelectorAll('.grocery-item');
    if(item.length > 0){
        item.forEach(function(i){
            list.removeChild(i);
        });
    }
    cont.classList.remove('show-cont');
    displayAlert("List Cleared");
    setBackToDefault()
}

function deleteItem(d){
    const item = d.currentTarget.parentElement.parentElement;
    const id = item.dataset.id
    list.removeChild(item);
    if(list.children.length === 0){
        cont.classList.remove('show-cont')
    }
    displayAlert("Item Removed")
    // removeFromStorage(id)
}

function editItem(e){
    const item = e.currentTarget.parentElement.parentElement;
    editElem = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElem.innerHTML;
    editFlag = true;
    editId = item.dataset.id;
}

function displayAlert(text,action){
    alert.textContent  = text;
    setTimeout(function(){
        alert.textContent = "";
    },1000);
};

function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editId = "";

}