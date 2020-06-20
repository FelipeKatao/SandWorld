class Game{
    constructor(areaGameX,areaGameY,placeX,PlaceY,IdPlace){
        this.areaGameX=areaGameX
        this.areaGameY=areaGameY
        this.placeX=placeX
        this.PlaceY=PlaceY
        this.IdPlace=IdPlace
    }
    target= document.getElementById(this.IdPlace)
    addAreaGame(target){
        let alvo=document.getElementById(target)
        alvo.style.left=this.areaGameX+"vh"
        alvo.style.top=this.areaGameY+"vh"
        alvo.style.height=this.placeX+"vh"
        alvo.style.width=this.PlaceY+"vh"
    }

}

export {Game}
