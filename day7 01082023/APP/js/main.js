const products = [
    { id:1, title:"Product 1", price:8000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:2, title:"Product 2", price:5000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:3, title:"Product 3", price:2000, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:4, title:"Product 4", price:1500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" },
    { id:5, title:"Product 5", price:9500, photoURL:"https://www.tunisianet.com.tn/279676-large/smartphone-apple-iphone-14-pro-5g-128-go-silver.jpg" }

]

 

let display = false;


const productListElement = document.getElementById("products-list");
const gridBTN = document.getElementById("grid");
const listBTN = document.getElementById("list");



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

    products.map( (p)=>{
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