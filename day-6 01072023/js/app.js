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

    const blocHTML = `<div class="outgoing-message bloc-message">
                            <div class="message">
                                ${ message }
                            </div>
                        </div>`;   

    messagesList.innerHTML = messagesList.innerHTML + blocHTML;

})