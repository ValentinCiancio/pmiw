class juego {

  constructor() {
    this.autos = [];
    this.mango = new mango(width/2, 375);
    this.gano = false;

    this.crearautos();
  }

  dibujar() {

    for(let i = 0; i < this.autos.length; i++) {

      if(this.mango.vida && !this.gano) {
        this.autos[i].mover();
      }

      this.autos[i].dibujar();

      if(this.mango.vida && !this.gano) {
        this.mango.atropellar(this.autos[i]);
      }

    }

    stroke(0);
    strokeWeight(2);

    for(let i = 0; i <= 5; i++) {
      line(0, 50 + i*60, width, 50 + i*60);
    }

    noStroke();

    this.mango.dibujar();

    this.ganar();


   if(!this.mango.vida) {
      image (perdiste, 0, 0, 800, 400);
      PantallaPierde();
    }
    
    else if(this.gano) {
      image (afuera, 0, 0, 800, 400);
      PantallaGana();
    }
    
if(!this.mango.vida || this.gano) {

  fill(255);
  rect(300, 280, 200, 50);

  fill('#1A1919');
  textSize(15);
  textAlign(CENTER, CENTER);
  text("REPETIR", 400, 305);

}
  }

  iniciar() {

  }

 crearautos() {

  this.autos = [];

  let espacioEntreAutos = 330;
  let distancia = 140 + espacioEntreAutos;

  for(let i = 0; i < 5; i++) {

    let y = 55 + i*60;
    let velocidad;
    let x;

    if(i % 2 == 0) {
      velocidad = 1.7;
      x = 20;
    }

    else {
      velocidad = -2;
      x = 170;
    }

    this.autos.push(new autos(x, y, velocidad));
    this.autos.push(new autos(x + distancia, y, velocidad));

  }

}

  crearmango() {
    this.mango = new mango(width/2, 375);
    this.gano = false;
  }

  ganar() {
    if(this.mango.posY <= 25 && this.mango.vida) {
      this.gano = true;
    }
  }

  teclaPresionada(keyCode) {
    if(this.mango.vida && !this.gano) {
      this.mango.teclaPresionada(keyCode);
    }
  }
reiniciar() {
  this.mango = new mango(width/2, 375);
  this.gano = false;
  this.crearautos();
}

mouseClicked(x, y) {

  if(!this.mango.vida || this.gano) {

    if(x > 300 && x < 500 && y > 280 && y < 330) {
      this.reiniciar();
    }

  }

}
}
