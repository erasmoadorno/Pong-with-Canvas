class Placar {
    constructor(cx){
        this.cx=cx
        this.meio=canvas.width/2 
        this.altura = 70
    }
    desenho(){
        this.cx.font="70px calibri"
        this.cx.fillStyle = 'rgb(54,50,200)';
        this.cx.fillText(pj, this.meio-182,this.altura )
        this.cx.fillStyle = 'rgb(200,50,54)';
        this.cx.fillText(pcpu, this.meio+148,this.altura )
    }
    
}