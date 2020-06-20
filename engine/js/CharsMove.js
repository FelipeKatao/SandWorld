class charsMove {

    constructor(speed, rateY, rateX, limitX_left, limitX_rigth, limitY_down, limitY_up) {
        this.speed = speed
        this.rateY = rateY
        this.rateX = rateX
        this.limitX_left = limitX_left
        this.limitX_rigth = limitX_rigth
        this.limitY_down = limitY_down
        this.limitY_up = limitY_up
    }

    posCharMove(posX,PosY,targetMove){
        document.getElementById(targetMove).style.left=posX+'px'
        document.getElementById(targetMove).style.top=PosY+'px'
    }
    
    move_left=true
    move_right=true
    move_down=true
    move_up=true
    move_detect=""

    addMoveKeyboards(targetMove) {
        let charTarget = document.getElementById(targetMove)
        document.addEventListener("keydown", (event) => {
            const keyname = event.key;
            //console.log("X: " + this.rateX + "   Y:" + this.rateY)
            if (event.keyCode == 39 && this.move_right==true) {
                this.rateX += this.speed
                if (this.rateX <= this.limitX_left) {
                    charTarget.style.left = this.rateX + 'px'
                    this.move_detect="left"
                }
                else {
                    this.rateX -= this.speed
                }
            }
            if (event.keyCode == 37 && this.move_left==true) {
                this.rateX -= this.speed
                if (this.rateX >= this.limitX_rigth) {
                    charTarget.style.left = this.rateX + 'px'
                }
                else {
                    this.rateX += this.speed
                }
            }
            if (event.keyCode == 40 && this.move_down==true) {
                this.rateY += this.speed
                if (this.rateY <= this.limitY_down) {
                    charTarget.style.top = this.rateY + 'px'
                }
                else {
                    this.rateY -= this.speed
                }
            }
            if (event.keyCode == 38 && this.move_up==true) {
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

