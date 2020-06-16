var charTarget= document.getElementById("char")
var speed = 30;
var rateY=4;
var rateX=4;
document.addEventListener("keydown",(event)=>{
    const keyname = event.key;

    if(event.keyCode==39){
        rateX+=speed
        charTarget.style.left=rateX+'px'
    }
    if(event.keyCode==37){
        rateX-=speed
        charTarget.style.left=rateX+'px'
    }
    if(event.keyCode==40){
        rateY+=speed
        charTarget.style.top= rateY+'px'
    }
    if(event.keyCode==38){
        rateY-=speed
        charTarget.style.top=rateY+'px'
    }
})
