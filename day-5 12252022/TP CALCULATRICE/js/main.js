// DECLARATION OF VARAIBLES
console.log("hello world");


// DOCUMENT
//console.log(document);

// WINDOW
//console.log(window);

/*

var username="test"; 
const pi = 3.14;

let x = 15;
let y = 16;
let s = (x+y);


console.log(typeof "bonjour");
console.log(typeof 15);
console.log(typeof 5.2);
console.log(typeof NaN);

console.log(typeof [ 1,2,3,5,6,3 ]);
console.log(typeof {  } );
console.log(typeof new Date());
console.log(typeof false);*/



/**
 * 
 *  SET MODOFICATION
 *  document.getElementById("result").innerText="bonjour"
    
    GET // get the value
    document.getElementById("result").innerText
    'bonjour'

 */



function somme( x,y ){
    return( x+y );
}

function multiplication( x,y ){
    return( x*y );
}

function division( x,y ){
    return( x/y );
}



function calculer(){
    let x = document.getElementById("inputx").value;

    let y = document.getElementById("inputy").value;

    let op = document.getElementById("opelement").value;


    let res = 0;


    if (op == "+") {
         res = somme(  Number(x)   ,  Number(y)  );
 
    }else if( op == "*" ){
        res = multiplication(  Number(x)   ,  Number(y)  );
 
    }else if( op == "/" ){
        res = division(  Number(x)   ,  Number(y)  );
    }
    
   

   document.getElementById("result").innerText = res;
}