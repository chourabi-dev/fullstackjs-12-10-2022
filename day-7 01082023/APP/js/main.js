const products = [
    { id:1, category: 2 , title:"Hp pavillion", price:8000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:2, category: 1, title:"Samsung s21", price:5000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:3, category: 2, title:"Lg smart tv", price:2000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:4, category: 2, title:"Sony playsttation", price:1500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:5, category: 2, title:"Xbox serie x", price:9500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" }

]


const catergories = [
    { id:1, title:"Smart phone"  },
    { id:2, title:"Autre"  },
 
]


 

let display = false;


const productListElement = document.getElementById("products-list");
const gridBTN = document.getElementById("grid");
const listBTN = document.getElementById("list");
const keywordsSearchElement = document.getElementById("keywords-search");
const priceSearchElement = document.getElementById("price-search");
const selectedPriceElement = document.getElementById("selected-price");
const categoryElement = document.getElementById("category");




let keywords = '';
let minPrice = 100000000000000;
let selectedCategory = 1;







catergories.map((c)=>{
    categoryElement.innerHTML=categoryElement.innerHTML + '<option value="'+c.id+'">'+c.title+'</option>';
})




gridBTN.addEventListener("click",function(){
    gridBTN.className="btn btn-primary";
    listBTN.className="btn btn-outline-primary";

    display = ! display;


    initData();
})


listBTN.addEventListener("click",function(){
    listBTN.className="btn btn-primary";
    gridBTN.className="btn btn-outline-primary";

    display = ! display;

    initData();
})

function initData(){
    let blocHTML = '';

    products.filter( ( p )=> 
    
   ( p.title.toLowerCase().indexOf( keywords.toLowerCase() ) != -1) 
   &&
   ( p.price <= minPrice )
   &&
    ( p.category == selectedCategory )
    
    
    )   .map( (p)=>{
       if (display == false) {
        blocHTML = blocHTML+`<div class="col-sm-4">
        <div class="card" >
            <img src="${p.photoURL}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <p class="card-text">${p.price}$</p>
             
            </div>
          </div>
    </div>`;
       } else {
        blocHTML = blocHTML+`<div class="col-12">
        <div class="row">
            <div class="col-6">
                <img src="${p.photoURL}" class="w-100" alt="">
            </div>
            <div class="col-6">
                <h1>${p.title}</h1>
                <p>
                ${p.price}$
                </p>
            </div>
        </div> 
    </div>`;


       }
    } )

    productListElement.innerHTML = blocHTML;
}



initData();






keywordsSearchElement.addEventListener("keyup",function(e){
    const val = e.target.value;

    keywords = val;


    initData();
     

})


function getMaxPrice(){

    let max = 0;


    products.map((p)=>{
        if (p.price > max) {
            max = p.price;
        }
    })



    return max;


}


priceSearchElement.addEventListener("change",function(e){
    const val = Number(e.target.value);
 
     minPrice = ( (  val  * getMaxPrice()  ) / 100 );


     selectedPriceElement.innerHTML = minPrice;

     initData();

})


categoryElement.addEventListener("change",function(e){
    const val = Number(e.target.value);
 
    
    selectedCategory = val;

     initData();

})
