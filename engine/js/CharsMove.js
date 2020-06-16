var charTarget= document.getElementById("char")
var speed = 30;
var rateY=4;
var rateX=4;
var limitX_left=3544
var limitX_rigth=-1376
var limitY_down=244
var limitY_up=-1196
document.addEventListener("keydown",(event)=>{
    const keyname = event.key;
    console.log("X: "+rateX+"   Y:"+rateY)
    if(event.keyCode==39){
        rateX+=speed
        if(rateX<=limitX_left){
            charTarget.style.left=rateX+'px'
        }
        else{
            rateX-=speed
        }
    }
    if(event.keyCode==37){
        rateX-=speed
        if(rateX>=limitX_rigth){
            charTarget.style.left=rateX+'px'
        }
        else{
            rateX+=speed
        }
    }
    if(event.keyCode==40){
        rateY+=speed
        if(rateY<=limitY_down){
            charTarget.style.top= rateY+'px'
        }
        else{
            rateY-=speed
        }
    }
    if(event.keyCode==38){
        rateY-=speed
        if(rateY>=limitY_up){
            charTarget.style.top=rateY+'px'
        }
        else{
            rateY+=speed
        }
    }
})
