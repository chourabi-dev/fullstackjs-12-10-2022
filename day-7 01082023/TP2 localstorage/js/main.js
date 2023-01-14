const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");



let counter = localStorage.getItem("counter") == null ? 0 :  Number(localStorage.getItem("counter"));
count.innerHTML = counter;



plus.addEventListener("click",function(){
    counter++;

    count.innerHTML = counter;

    localStorage.setItem("counter",counter)

})


minus.addEventListener("click",function(){
    counter--;

    count.innerHTML = counter;

    localStorage.setItem("counter",counter)

})
