let objjuego;

let imgFondo;
let imgAuto1;
let imgAuto2;
let imgAuto3;

let imgMangoQuieto;
let imgMangoCaminando;
let imgMangoAplastado;

function preload() {
  imgFondo = loadImage('data/calle.png');

  imgAuto1 = loadImage('data/auto1.png');
  imgAuto2 = loadImage('data/auto2.png');
  imgAuto3 = loadImage('data/auto3.png');

  imgMangoQuieto = loadImage('data/mangoquieto.png');
  imgMangoCaminando = loadImage('data/mangocaminando.png');
  imgMangoAplastado = loadImage('data/mangoaplastado.png');
  
  afuera = loadImage("data/fondo_mango.jpg");
  inicio = loadImage("data/inicio.jpg");
  perdiste = loadImage("data/perdiste.jpg");
  
}

function setup() {
  createCanvas(800, 400);
  objjuego = new juego();
}

function draw() {
  image(imgFondo, 0, 0, width, height);
  pantallasestados();

}

function keyPressed() {
  objjuego.teclaPresionada(keyCode);
}

function mouseClicked() {
  objjuego.mouseClicked(mouseX, mouseY);
}

function mousePressed() {
  if (estado == 0) {
    if (CursorSobreBoton(100, 330, 180, 110)) {
      estado = 1;
    }
  }
}
