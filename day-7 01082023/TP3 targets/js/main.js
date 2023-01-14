/* 

for (let index = 0; index < document.getElementsByClassName("bloc") .length; index++) {
    document.getElementsByClassName("bloc").item(index).style.backgroundColor = "red"
    
}


for (let index = 0; index < document.getElementsByClassName("bloc") .length; index++) {
    document.getElementsByClassName("bloc").item(index).addEventListener("click",function(){
        console.log("clicked !!",index);
    })
    
}*/

 
for (
    
        let index = 0;
     index < document.getElementsByClassName("bloc").length;
      index++
      
      ) {
    document.
    getElementsByClassName("bloc").
    item(index).children[2].
    addEventListener("click",function(e){
        e.target.innerHTML = Number(e.target.innerHTML) + 1;
    })
    
}