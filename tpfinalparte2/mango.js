class mango {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
  }

  dibujar() {
    if (!this.vida) {
      image(imgMangoAplastado, this.posX - 25, this.posY - 32, 50, 65);
    }

    else if (
      keyIsDown(UP_ARROW) ||
      keyIsDown(DOWN_ARROW) ||
      keyIsDown(LEFT_ARROW) ||
      keyIsDown(RIGHT_ARROW)
    ) {
     image(imgMangoCaminando, this.posX - 20, this.posY - 26, 50  , 52);
    }

    else {
      image(imgMangoQuieto,  this.posX - 20, this.posY - 26, 50, 52);
    }
  }

  moveradelante() {
    this.posY -= 11;

    if (this.posY < 25) {
      this.posY = 25;
    }
  }

  moveratras() {
    this.posY += 11;

    if (this.posY > height - 25) {
      this.posY = height - 25;
    }
  }

  moverizquierda() {
    this.posX -= 10;

    if (this.posX < 10) {
      this.posX = 10;
    }
  }

  moverderecha() {
    this.posX += 10;

    if (this.posX > width - 10) {
      this.posX = width - 10;
    }
  }

  teclaPresionada(keyCode) {
    if (this.vida) {

      if (keyCode == UP_ARROW) {
        this.moveradelante();
      }

      else if (keyCode == DOWN_ARROW) {
        this.moveratras();
      }

      else if (keyCode == LEFT_ARROW) {
        this.moverizquierda();
      }

      else if (keyCode == RIGHT_ARROW) {
        this.moverderecha();
      }
    }
  }

  estavivo() {
    return this.vida;
  }

  pisar() {
    this.vida = false;
  }

  atropellar(auto) {
    if (
      this.posX + 10 > auto.posX &&
      this.posX - 10 < auto.posX + auto.ancho &&
      this.posY + 25 > auto.posY &&
      this.posY - 25 < auto.posY + auto.alto
    ) {
      this.pisar();
    }
  }
}
