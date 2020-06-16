//Criar os contrutores do game
let npc1= new NpcObject("npc1","npc1",10)
let npc2 = new NpcObject("npc2","npc2",5)
let npc3 = new NpcObject("npc3","npc3",20)
let npc4 = new NpcObject("npc4","npc4",40)

setInterval(gameLoop,33);
function gameLoop(){
}

setInterval(NpcFunctions,300)

function NpcFunctions(){
    npc1.moveNpc()
    npc2.moveNpc()
    npc3.moveNpc()
    npc4.moveNpc()
}

