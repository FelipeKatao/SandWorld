
function moveNpc(targetNpc){
    targetNpc.style.top=rateX-13+'px'
}
class NpcObject{
    constructor(nameNpc,npcTarget,speed){
        this.name=nameNpc
        this.npcTarget=document.getElementById(npcTarget)
        this.speed=speed
    }
    RateNpcX=0
    RateNpcY=0
    moveNpc(){
        let Direction=Math.floor(Math.random()*6)
        if(Direction == 1){
            this.RateNpcX+=this.speed
            this.npcTarget.style.top=this.RateNpcY+this.speed+'px'
        }
        if(Direction == 2){
            this.RateNpcX-=this.speed
            this.npcTarget.style.top=this.RateNpcY-this.speed+'px'
        }
        if(Direction == 3){
            this.RateNpcY+=this.speed
            this.npcTarget.style.left=this.RateNpcX+this.speed+'px'
        }
        if(Direction == 4){
            this.RateNpcY-=this.speed
            this.npcTarget.style.left=this.RateNpcX-this.speed+'px'
        }
    }
}