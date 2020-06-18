//Criar a movimentação dos personagens
let hero = new charsMove(30, 4, 4, 3544, -1376, 244, -1196)
hero.addMoveKeyboards("char")
hero.posCharMove(10,20,"char")
//Criar os contrutores do game
let npc1 = new NpcObject("npc1", "npc1", 10)
npc1.modifymoveTimes(30, 20)
let npc2 = new NpcObject("npc2", "npc2", 10)
npc2.modifymoveTimes(50, 50)
let npc3 = new NpcObject("npc3", "npc3", 10)
npc3.modifymoveTimes(20, 30)
let npc4 = new NpcObject("npc4", "npc4", 10)
npc4.modifymoveTimes(30, 20)

npc1.limitsAreaNpc(300, -690, -94, 1010)
npc2.limitsAreaNpc(300, -690, -94, 1010)
npc3.limitsAreaNpc(300, -690, -94, 1010)
npc4.limitsAreaNpc(300, -690, -94, 1010)

let col=new ColiderObjs()
let col2=new ColiderObjs()

setInterval(gameLoop, 33);
function gameLoop() {
    npc1.moveXNpc()
    npc2.moveYNpc()
}

setInterval(gameLoop2, 40);
function gameLoop2() {
    if(col.newCreateColider("char","npc4",teste,teste)){
       teste()
    }
    if(col.newCreateColider("char","npc3",teste,teste)){
        teste()
    }
    if(col.newCreateColider("char","npc1",teste,teste)){
        teste()
    }   
    if(col.newCreateColider("char","npc2",teste,teste)){
        teste()
    }

}
var damage=false
function teste(){
    if(damage==false){
        document.getElementById("char").style.backgroundColor="yellow"
        damage=true
    }
    else{
        document.getElementById("char").style.backgroundColor="red"
        damage=false
    }
}


