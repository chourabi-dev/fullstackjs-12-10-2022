/*const input = document.getElementById("my-input");
const statusP = document.getElementById("status");


input.addEventListener("keydown",
function(e){

    console.log(e.code);

    if (e.code != 'Enter') {
        statusP.style.display = 'block';
    }else{
        statusP.style.display = 'none';
    }
 
})*/


const feild = document.getElementById("feild");
const ball = document.getElementById("ball");



feild.addEventListener("mousemove",function(e){
  
    ball.style.top =( e.clientY - 40 )+'px'
    ball.style.left = ( e.clientX - 40)+'px'
    

})