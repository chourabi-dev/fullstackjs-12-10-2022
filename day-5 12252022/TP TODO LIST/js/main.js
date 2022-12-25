/**
 * var blockElement = document.getElementById("block");


blockElement.innerHTML="<h1>bonjour</h1>";


 */



function add(){
    // get the value from the input
    let todoElement = document.getElementById("todo");

    let todo = todoElement.value; //GET

    if (todo != "") {
        

    // reset the feild !!

    todoElement.value="";

    // add li to ul

    let listTodoElement = document.getElementById("listTodo");

    let oldHTML  = listTodoElement.innerHTML;

    let newHTML = oldHTML+"<li>"+todo+"</li>";

    listTodoElement.innerHTML = newHTML;

    }
}


function clearList(){ 
    let listTodoElement = document.getElementById("listTodo");
 
    listTodoElement.innerHTML="";
}