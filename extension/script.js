const form = document.getElementById("form");
const summary = document.getElementById("text");

function summarize(){
    document.getElementById("summary").innerHTML="Summary: ";
}
function transcript(){
    document.getElementById("transc").innerHTML="Transcript: ";
}

// form.onsubmit = function(x){
//     x.preventDefault();
//     chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
//         chrome.tabs.sendMessage(tabs[0].id, {"message": "Generate"}, function(response){console.log("test")});
//     });
// };

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse){
//         if(request.msg == "RESULT"){
//             summary.innerHTML += request.data;
//         } 
//     }
// );
