var charTarget= document.getElementById("char")
var actualPos = 3;
document.addEventListener("keydown",(event)=>{
    const keyname = event.key;
    if(event.keyCode==39){
        charTarget.style.left=  actualPos+'px';
        charTarget.style.backgroundColor="blue";
        actualPos+=3;
        Console.log(actualPos)
    }
})
