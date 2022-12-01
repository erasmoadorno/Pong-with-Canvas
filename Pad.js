class Jogador{
    constructor(cx, controle){
        this.cx=cx
        this.controle = controle
        this.vel = 5
        this.x=5
        this.largura=20
        this.altura=120
        this.y=((canvas.height/2)-(this.altura/2))
    }
    desenho(){
        this.cx.beginPath()
        this.cx.roundRect(this.x, this.y, this.largura, this.altura, [40])
        this.cx.fillStyle="#40f"
        this.cx.fill()
        this.movimentoPlayer()
        
    }
    movimentoPlayer(){
        if(this.y<1){
            this.controle.cima = false
        }if(this.x<1){
            this.controle.esquerda = false
        }if((this.y+this.altura)>canvas.height){
            this.controle.baixo = false
        }if(this.x+this.largura>canvas.width/5){
            this.controle.direita = false
        }if (this.controle.cima) {
            this.y-=this.vel
        }if (this.controle.baixo) {
            this.y+=this.vel
        }if (this.controle.direita) {
            this.x+=this.vel
        }if (this.controle.esquerda) {
            this.x-=this.vel
        }
        
    }
}