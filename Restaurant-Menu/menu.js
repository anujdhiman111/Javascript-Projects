const menu = [
    {
        id : 1,
        title : "Butter Milk",
        category : "Breakfast",
        pic : "image1.jpeg",
        price : 15.99,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
    {
        id : 2,
        title : "Diner Double",
        category : "Dinner",
        pic : "image2.jpg",
        price : 14.99,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
    {
        id : 3,
        title : "Country Delight",
        category : "Lunch",
        pic : "image3.jpg",
        price : 13.99,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
    {
        id : 4,
        title : "Chinese Food",
        category : "Breakfast",
        pic : "image4.jpg",
        price : 9.89,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
    {
        id : 5,
        title : "Butter Milk",
        category : "Shakes",
        pic : "image5.webp",
        price : 12.9,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
    {
        id : 6,
        title : "Flavoured Butter Milk",
        category : "Shakes",
        pic : "image6.jpg",
        price : 10.99,
        desc : " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur quidem earum nam perspiciatis, consequatur commodi,eum soluta ex sunt voluptatum aperiam harum praesentium excepturi corrupti.",
    },
]
let section = document.querySelector(".section-center");
let btnCont = document.querySelector(".btn-container")

window.addEventListener('DOMContentLoaded',function(){
   displayMenu(menu); 
   displayBtn();
});

function displayMenu(menuItem){
    let showmenu = menuItem.map(function(item){   
        return `<article class="menu-item">
                    <div class="menu-img">
                        <img src="${item.pic}" class="photo" alt="Food Img"/>
                    </div>
                    <div class="item-info">
                        <header>
                            <h4 class="item-name">${item.title}</h4>
                            <h4 class="item-price">${item.price}</h4>
                        </header>
                    <p class="item-para">
                        ${item.desc}
                    </p> 
                    </div>
                </article>`;
    });
    showmenu = showmenu.join('');
    section.innerHTML = showmenu;
}

function displayBtn(){
    const categories = menu.reduce(function(val,item){
        if(!val.includes(item.category)){
            val.push(item.category);
        }
        return val;
    },
    ["All"]
    );
 
     const categoryBtn = categories.map(function(l){
         return `<button type="button" class="menu-btn" data-id=${l}>${l}</button>`
     }).join('');
     btnCont.innerHTML = categoryBtn;
     let filter = document.querySelectorAll(".menu-btn");
 
     filter.forEach(function(btn){
         btn.addEventListener('click',function(e){
         const cat = e.currentTarget.dataset.id;
         const menuCat = menu.filter(function(menuitems){
             if(menuitems.category === cat){
                 return menuitems;
             }
         })
         if(cat === "All"){
             displayMenu(menu);
         }
         else{
             displayMenu(menuCat);
         }
         });
     });
}
