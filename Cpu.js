class Cpu {
  constructor(cx, bola) {
    this.cx = cx;
    this.bola = bola;
    this.vel = 5;
    this.largura = 20;
    this.altura = 120;
    this.x = canvas.width - this.largura;
    this.y = canvas.height / 2 - this.altura / 2;
    this.iniX = this.x-10
    this.iniY = this.y;
  }
  desenho() {
    
    this.cx.beginPath()
    this.cx.roundRect(this.x, this.y, this.largura, this.altura, [40])
    this.cx.fillStyle = "#f04";
    this.cx.fill()
    this.movimentoCpu();
  }
  movimentoCpu() {

    //Movimento Y

    if (this.bola.dirX == 1) {
      if (this.y + this.altura < this.bola.y + this.bola.altura && this.bola.x + this.bola.largura>canvas.width/2) {
        this.y += this.vel;
      }
      if (this.y > this.bola.y + this.bola.altura && this.bola.x + this.bola.largura>canvas.width/2) {
        this.y -= this.vel;
      }
      
      //Movimento X
      
      if ((this.y + this.altura < this.bola.y + this.bola.altura && this.bola.x + this.bola.largura>canvas.width-(canvas.width/3) && this.x>this.bola.x)) {
          this.x-=this.vel
        }else if((this.y + this.altura > this.bola.y + this.bola.altura && this.bola.x + this.bola.largura>canvas.width-(canvas.width/4)&& this.x>this.bola.x)){
          this.x-=this.vel
        }else if(this.x+(this.bola.x/60)<this.bola.x){
          this.x+=this.vel/2
        }
        
    } 
        
    else {
        if(this.y<this.iniY){
            this.y+=this.vel 
        } else if (this.y>this.iniY) {
            this.y-=this.vel
        }if (this.x>this.iniX+5) {
            this.x-=this.vel
        }else if (this.x<this.iniX) {
            this.x+=this.vel
        }
  }

  //Colisão com a bola
  if ((this.x<=(this.bola.x+this.bola.largura) && (this.x+this.largura)>=this.bola.x && (this.y+this.altura)>this.bola.y && this.y<(this.bola.y+this.bola.altura))){
    this.bola.dirX =-1
    this.bola.dirY = Math.round(this.bola.y + (this.bola.altura / 2) - (this.y + (this.altura / 2)))/10;
}
}
}
