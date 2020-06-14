var charTarget= document.getElementById("char")
document.addEventListener("keydown",(event)=>{
    const keyname = event.key;
    if(event.keyCode==39){
        charTarget.style.left='3px';
        charTarget.style.backgroundColor="blue";
    }
})
