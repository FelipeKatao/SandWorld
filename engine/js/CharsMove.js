class charsMove{  
    constructor(speed,rateY,rateX,limitX_left,limitX_rigth,limitY_down,limitY_up){
        this.speed=speed
        this.rateY=rateY
        this.rateX=rateX
        this.limitX_left=limitX_left
        this.limitX_rigth=limitX_rigth
        this.limitY_down=limitY_down
        this.limitY_up=limitY_up
    }
    //speed = 30;
    //rateY = 4;
    //rateX = 4;
    //limitX_left = 3544  
    //limitX_rigth = -1376
    //limitY_down = 244
    //limitY_up = -1196    
    addMoveKeyboards(targetMove){
        let charTarget = document.getElementById(targetMove)
        document.addEventListener("keydown", (event) => {
            //const keyname = event.key;
            console.log("X: " + this.rateX + "   Y:" + this.rateY)
            if (event.keyCode == 39) {
                this.rateX += this.speed
                if (this.rateX <= this.limitX_left) {
                    charTarget.style.left = this.rateX + 'px'
                }
                else {
                    this.rateX -= this.speed
                }
            }
            if (event.keyCode == 37) {
                this.rateX -= this.speed
                if (this.rateX >= this.limitX_rigth) {
                    charTarget.style.left = this.rateX + 'px'
                }
                else {
                    this.rateX += this.speed
                }
            }
            if (event.keyCode == 40) {
                this.rateY += this.speed
                if (this.rateY <= this.limitY_down) {
                    charTarget.style.top = this.rateY + 'px'
                }
                else {
                    this.rateY -= this.speed
                }
            }
            if (event.keyCode == 38) {
                this.rateY -= this.speed
                if (this.rateY >= this.limitY_up) {
                    charTarget.style.top = this.rateY + 'px'
                }
                else {
                    this.rateY += this.speed
                }
            }
        })
                
    }
}

