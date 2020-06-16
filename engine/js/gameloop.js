//Criar os contrutores do game
let npc1= new NpcObject("npc1","npc1",10)
npc1.modifymoveTimes(30,20)
let npc2 = new NpcObject("npc2","npc2",10)
npc2.modifymoveTimes(50,50)
let npc3 = new NpcObject("npc3","npc3",10)
npc3.modifymoveTimes(20,30)
let npc4 = new NpcObject("npc4","npc4",10)
npc4.modifymoveTimes(30,20)

npc1.limitsAreaNpc(300,-690,-94,1010)
npc2.limitsAreaNpc(300,-690,-94,1010)
npc3.limitsAreaNpc(300,-690,-94,1010)
npc4.limitsAreaNpc(300,-690,-94,1010)

setInterval(gameLoop,33);
function gameLoop(){
}

setInterval(NpcFunctions,60)

function NpcFunctions(){
    npc1.moveXNpc()
    npc2.moveYNpc()
    npc3.moveXNpc()
    npc4.moveYNpc()
}

