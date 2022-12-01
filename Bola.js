class Bola {
  constructor(cx, player) {
    this.cx = cx;
    this.altura = 20;
    this.largura = 20;
    this.jogador = player;
    this.y = canvas.height / 2 - this.altura / 2;
    this.x = canvas.width / 2 - this.largura / 2;
    this.vel = 4;
    this.dirX = 0;
    this.dirY = 0;
    this.stopMode = document.getElementById("nonStopCB")
    this.statusB = false;
    this.btnHide = false;
  }
  movBola() {
    const btn = (document.getElementById("btnIni").hidden = this.btnHide);
    if (this.statusB) {
      this.btnHide = true;
      this.statusB = false;
      this.dirY = Math.random() * 10 > 5 ? 1 : -1; //Valor randomico que: 10 é o limite, > 5 como numero randomico maior que 5, ? if, caso maior que 5 retorna 1, se não -1
      this.dirX = Math.random() * 10 > 5 ? 1 : -1;
    }
    this.x += this.vel * this.dirX;
    this.y += this.vel * this.dirY;
    if (this.x <= 1 || this.x + this.largura > canvas.width - 1) {
      this.dirX *= -1;

      // Reinicio do jogo após pontuação

      if (this.x <= 1) {
        pcpu++;
        if (this.stopMode.checked==true) {
          console.log("Modo check on")
        } else if (this.stopMode.checked==false) {
          console.log("Modo check off")
        }
        if (this.stopMode.checked == false) {
          this.statusB = false;
          this.btnHide = false;
          this.y = canvas.height / 2 - this.altura / 2;
          this.x = canvas.width / 2 - this.largura / 2;
          this.dirX = 0;
          this.dirY = 0;
          player.x = 5
          player.y =((canvas.height/2)-(player.altura/2))
          cpu.y = cpu.iniY
          cpu.x = cpu.iniX + 35
        }
      } else if (this.x + this.largura > canvas.width - 1) {
        pj++;
        if (this.stopMode.checked == false) {
          this.statusB = false;
          this.btnHide = false;
          this.y = canvas.height / 2 - this.altura / 2;
          this.x = canvas.width / 2 - this.largura / 2;
          this.dirX = 0;
          this.dirY = 0;
          player.x = 5
          player.y =((canvas.height/2)-(player.altura/2))
          cpu.y = cpu.iniY
          cpu.x = cpu.iniX + 35
        }
      }
    }
    if (this.y <= 1 || this.y + this.altura > canvas.height - 1) {
      this.dirY *= -1;
    }
    if (
      this.x <= this.jogador.x + this.jogador.largura &&
      this.x + this.largura >= this.jogador.x &&
      this.y + this.altura > this.jogador.y &&
      this.y < this.jogador.y + this.jogador.altura
    ) {
      this.dirX = 1;
      this.dirY =
        Math.round(
          this.y + this.altura / 2 - (this.jogador.y + this.jogador.altura / 2)
        ) / 10;
    }
   
    if (this.y<-30) {
      this.y=40
    } else if (this.y+this.altura>canvas.height+30) {
      this.y=canvas.height-40
    }
  }
  desenho() {
    this.cx.shadowColor = "rgba(0,0,0,1)"
    this.cx.shadowOffSetX = 15;
    this.cx.shadowOffSetY = 10;
    this.cx.beginPath()
    this.cx.fillStyle = "#561";
    this.cx.roundRect(this.x, this.y, this.largura, this.altura, [40]);
    this.cx.fill()

    this.movBola();
  }
}
