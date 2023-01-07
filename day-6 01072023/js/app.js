const blocChatElement = document.getElementById("bloc-chat");
const closeElement = document.getElementById("close");
const chatOpenElement = document.getElementById("chat-open");
const sendBTN = document.getElementById("send-btn");
const zoneMessage = document.getElementById("zone-message");
const messagesList = document.getElementById("messages-list");
// EVENTS !!!!


chatOpenElement.addEventListener("click",function(){
    console.log("clicked !!!");

    blocChatElement.className="bloc-chat active-chat"
})


closeElement.addEventListener("click",function(){
    blocChatElement.className="bloc-chat"
})

 


sendBTN.addEventListener("click",function(){
    // get the value from the input !!!

    const message = zoneMessage.value; 

    zoneMessage.value='';

    if (message != "") {
        const blocHTML = `<div class="outgoing-message bloc-message">
                            <div class="message">
                                ${ message }
                            </div>
                        </div>`;   

    messagesList.innerHTML = messagesList.innerHTML + blocHTML;


    const keywords = message.split(" "); 

    let responde = false;  
    keywords.map( (mot)=>{

        if (responde == false) {
            
            if ( mot == 'produits') {
                
                const blocHTML = `<div class="income-message bloc-message">
                                <div class="message">
                                    if you are looking for our product click on this link <a href="#">click here</a>
                                </div>
                            </div>`;  

                messagesList.innerHTML = messagesList.innerHTML + blocHTML;
                responde = true

            }


           
        }

    } )
    }



})











/**
 * const demo = [1,2,3,5,15,13,19,5,6,3]
undefined
demo
(10) [1, 2, 3, 5, 15, 13, 19, 5, 6, 3]
demo.length
10
// first elemenet => index 0
undefined
demo[0]
1
demo.map()
VM2970:1 Uncaught TypeError: undefined is not a function
    at Array.map (<anonymous>)
    at <anonymous>:1:6
(anonymous) @ VM2970:1
demo.map(()=>{})
(10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
demo.map(()=>{ console.log("test") })
10VM3056:1 test
(10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
demo.map( (e)=>{ console.log(e) }  )
VM3142:1 1
VM3142:1 2
VM3142:1 3
VM3142:1 5
VM3142:1 15
VM3142:1 13
VM3142:1 19
VM3142:1 5
VM3142:1 6
VM3142:1 3





const demo = [1,2,3,5,15,13,19,5,6,3]
undefined
demo.join()
'1,2,3,5,15,13,19,5,6,3'
'1,2,3,5,15,13,19,5,6,3'.split(",")
(10) ['1', '2', '3', '5', '15', '13', '19', '5', '6', '3']


const demo = [1,2,3,5,15,13,19,5,6,3]
undefined
demo.filter(  e =>  true  )
(10) [1, 2, 3, 5, 15, 13, 19, 5, 6, 3]
demo.filter(  e =>  false  )
[]
demo.filter(  e =>  e >= 10  )
(3) [15, 13, 19]



 */