import {Game} from "./GameConfigs.js"
//Criar a movimentação dos personagens

//Criar os contrutores do game
let g=new Game(60,10,60,90,"box")
g.addAreaGame("box")
let f=new charsMove(3,3,5,2,1,3,5)
f.addMoveKeyboards("box")


setInterval(gameLoop, 33);
function gameLoop() {
   // g.moveAreaGame(5)
 
}

