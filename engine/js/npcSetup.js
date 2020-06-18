class NpcObject {
    constructor(nameNpc, npcTarget, speed) {
        this.name = nameNpc
        this.npcTarget = document.getElementById(npcTarget)
        this.speed = speed
    }
    RateNpcX = 0
    RateNpcY = 0
    limitsX = [0, 0]
    limitsY = [0, 0]
    direction_X = false
    limitsAreaNpc(Xleft, Xright, Yup, Ydown) {
        this.limitsX = [Xright, Xleft]
        this.limitsY = [Yup, Ydown]
    }
    
    move_left=true
    move_right=true
    move_down=true
    move_up=true
    moveNpc() {
        let Direction = Math.floor(Math.random() * 6)
        if (Direction == 1) {
            if (this.RateNpcX >= this.limitsX[0]) {
                this.RateNpcX -= this.speed
                this.npcTarget.style.left = this.RateNpcX - this.speed + 'px'
            }
        }
        if (Direction == 2) {
            if (this.RateNpcX <= this.limitsX[1]) {
                this.RateNpcX += this.speed
                this.npcTarget.style.left = this.RateNpcX + this.speed + 'px'
            }
        }
        if (Direction == 3) {
            if (this.RateNpcY <= this.limitsY[1]) {
                this.RateNpcY += this.speed
                this.npcTarget.style.top = this.RateNpcY + this.speed + 'px'
            }
        }
        if (Direction == 4) {
            if (this.RateNpcY >= this.limitsY[0]) {
                this.RateNpcY -= this.speed
                this.npcTarget.style.top = this.RateNpcY - this.speed + 'px'
            }
        }
    }
    movesX = 0
    moveXTimesLeft = this.movesX;
    moveXTImesRight = this.movesX;
    movesY = 0
    moveYTimesUp = this.movesY;
    moveYTImesDown = this.movesY;
    modifymoveTimes(x, y) {
        this.movesX = x; this.movesY = y
    }
    moveXNpc() {
        if (this.moveXTimesLeft >= 0) {
            this.RateNpcX -= this.speed
            this.npcTarget.style.left = this.RateNpcX - this.speed + 'px'
            this.moveXTimesLeft -= 1
        }
        else {
            if (this.moveXTImesRight >= 0) {
                this.RateNpcX += this.speed
                this.npcTarget.style.left = this.RateNpcX + this.speed + 'px'
                this.moveXTImesRight -= 1
            }
            else {
                this.moveXTimesLeft = this.movesX
                this.moveXTImesRight = this.movesX
            }
        }
    }
    moveYNpc() {
        if (this.moveYTimesUp >= 0) {
            this.RateNpcX -= this.speed
            this.npcTarget.style.top = this.RateNpcX - this.speed + 'px'
            this.moveYTimesUp -= 1
        }
        else {
            if (this.moveYTImesDown >= 0) {
                this.RateNpcX += this.speed
                this.npcTarget.style.top = this.RateNpcX + this.speed + 'px'
                this.moveYTImesDown -= 1
            }
            else {
                this.moveYTImesDown = this.movesY
                this.moveYTimesUp = this.movesY
            }
        }
    }
}