setTimeout(() => {
    document.querySelector("#ecar1").style.right="10vw";
    document.querySelector("h3").style.visibility="visible";
}, 5000);

setTimeout(() => {
    document.querySelector("#ecar2").style.right="20vw";
}, 10000);

var missile=null;

// document.addEventListener("click",()=>{
//     if (missile==null){
//         console.log("missile is nuklk")
//         missile=document.querySelector("#missile");
//         missile.addEventListener('transitionend', () => {
//             console.log('Transition ended: '+this);
//             console.log(missile.className+","+missile.style.visibility+","+missile.style.left+","+missile.style.top);
//             if (missile.style.visibility=="hidden"){
//                 console.error("missile visibility is hidden so do nothing and return");
//                 return;
//             }
//             missile.className="";
//             missile.style.visibility="hidden";
//             missile.style.left="10vw";
//             missile.style.top="20vh";
//             if (document.querySelector("#ecar2").style.right=="20vw" && document.querySelector("#ecar2").style.display!="none") {
//                 document.querySelector("#ecar2").style.display="none";
//                 console.log("ecar2 destroyed")        
//             }
//             else if (document.querySelector("#ecar1").style.right=="10vw"){
//                 document.querySelector("#ecar1").style.display="none";
//                 console.log("ecar1 destroyed")
//             }         
//         });
//     }
//     if (document.querySelector("#ecar2").style.right=="20vw" && document.querySelector("#ecar2").style.display!="none") {
//         missile.className="missile-transition";
//         missile.style.left="70vw";
//         missile.style.top="80vh";
//         missile.style.visibility="visible";
//         console.log("if")
//     }
//     else if (document.querySelector("#ecar1").style.right=="10vw"){
//         missile.className="missile-transition";
//         missile.style.left="70vw";
//         missile.style.top="80vh";
//         missile.style.visibility="visible";
//         console.log("else if")
//     }
    
// },true)

document.addEventListener("click",()=>{
    var missile = document.querySelector("#missile")
    var ecar1 = document.querySelector("#ecar1")
    var ecar2 = document.querySelector("#ecar2")
    var explosion1 = document.querySelector("#explosion1")
    var explosion2 = document.querySelector("#explosion2")
    
    missile.style.transition="2s linear"
    
    if (ecar2.style.right=="20vw" && ecar2.style.display!="none"){
        missile.style.top="80vh"
        missile.style.left="70vw"        
    }
    else if (ecar1.style.right=="10vw" && ecar1.style.display!="none"){
        missile.style.top="80vh"
        missile.style.left="80vw"
    }

    setTimeout(()=>{
        missile.style.transition="none"
        missile.style.maxWidth="0vw"
        missile.style.top="20vh"
        missile.style.left="10vw"
        missile.style.maxWidth="10vw"
        if (ecar2.style.right=="20vw" && ecar2.style.display!="none"){
            explosion2.style.maxWidth="20vw"
            setTimeout(()=>ecar2.style.display="none",500)
            setTimeout(()=>explosion2.style.maxWidth="0vw",1500)
            
        }
        else if (ecar1.style.right=="10vw" && ecar1.style.display!="none"){
            explosion1.style.maxWidth="20vw"
            setTimeout(()=>ecar1.style.display="none",500)
            setTimeout(()=>explosion1.style.maxWidth="0vw",1500)
        }
    },2000)
})


