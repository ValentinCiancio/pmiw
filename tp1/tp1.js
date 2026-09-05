 let fondo;
 let caminar = [];
 let QuedaParado = [];
 let EnojadoParado = [];
 let EnojadoPatada2 = [];
 let Elec = [];
 let quema = [];
 let elecMouse = [];
 
 let estado = "caminando";
 let contador = 0;
 
 let CaminarPosX = -75;

async function setup() {
 createCanvas(800, 600);
 fondo = await loadImage("data/PapyrusHouse.png");
 
 //caminar1
 for (let camino = 0; camino < 8; camino++){
   caminar [camino] = await loadImage ("data/caminando1/" + nf(camino,4) + ".png");
 }
 
 //parado2
 let frames2 = [8, 9];
 for (let parado = 0; parado < 2; parado++){
   QuedaParado [parado] = await loadImage ("data/parado2/" + nf(frames2 [parado],4) + ".png");
 }
 
 //enojado3
 let frames3 = [10, 11];
 for (let enojado = 0; enojado < 2; enojado++){
   EnojadoParado [enojado] = await loadImage ("data/enojadoParado3/" + nf(frames3 [enojado],4) + ".png");
 }
 
 //enojadoPatada4
 let frames4 = [12, 13, 14, 15];
 for (let enojadoPata = 0; enojadoPata < 4; enojadoPata++){
   EnojadoPatada2 [enojadoPata] = await loadImage ("data/enojado4/" + nf(frames4 [enojadoPata],4) + ".png");
 }
 
 //electrocutado5
 let frames5 = [16, 17];
 for (let electrocutado_ = 0; electrocutado_ < 2; electrocutado_++){
   Elec [electrocutado_] = await loadImage ("data/electrocutado5/" + nf(frames5 [electrocutado_],4) + ".png");
 }
 
 //elecmouse6
 let frames6 = [18, 19, 20, 21, 22, 23];
 for (let elecM = 0; elecM < 6; elecM++){
   elecMouse [elecM] = await loadImage ("data/rayo7/" + nf(frames6 [elecM],4) + ".png");
 }
 
 //QuedaQuemado7
   quema = await loadImage ("data/quemado6/0018.png");
}


function draw() {
 image (fondo, 0, 0, 800, 600);

push();

if (estado === "caminando") {
  let caminar1 = int(frameCount / 8) % 8; 
  image(caminar [caminar1], CaminarPosX, 280, 75, 160);
  
  if (CaminarPosX < 430) {
    CaminarPosX += 2;
  } else if (CaminarPosX >= 430) {
    estado = "parado";
  }
  
  } else if (estado === "parado") {
    let parado2 = int(frameCount / 30) % 2; 
  image(QuedaParado [parado2], 430, 280, 75, 160);
  contador++;
  
  if (contador >=200){
    estado = "enojadoParado";
    contador = 200;
  }
  
  } else if (estado === "enojadoParado") {
    let enojado3 = int(frameCount / 30) % 2; 
  image(EnojadoParado [enojado3], 430, 280, 75, 160);
   contador++;
   
  if (contador >=400){
    estado = "enojadoPatada";
  }
  
  } else if (estado === "enojadoPatada") {
    let enojadoPatada4 = int(frameCount / 10) % 4; 
  image(EnojadoPatada2 [enojadoPatada4], 426, 276, 85, 160);
  contador = 400;
  primerTexto();
  
  } else if (estado === "electrocutado") {
    let electrocutado_ = int(frameCount / 2) % 2; 
  image(Elec [electrocutado_], 395, 275, 155, 155);
  
  let elecM = int(frameCount / 4) % 6; 
  let tam = 100
  push();
  imageMode(CENTER)
  image(elecMouse [elecM], mouseX, mouseY, 100, 100);
  pop();
  contador++;
  
if (contador >=500){
    estado = "QuedaQuemado";
  }
} else if (estado === "QuedaQuemado") {
  image(quema, 430, 280, 85, 160); 
  reinicio()
}
pop(); 
  
   }
  
  function mouseSobrePY (x, y, ancho, alto){
  if (mouseX>x && mouseX<x + ancho &&
    mouseY>y && mouseY<y + alto) {
    return true;
  } else {
    return false;
  }
 } 
 
 function botoniz (x, y, ancho, alto){
  if (mouseX>x - ancho/2 && mouseX<x + ancho/2 &&
    mouseY>y - alto/2 && mouseY<y + alto/2) {
    return true;
  } else {
    return false;
  }
 } 
 
 function botonder (x, y, ancho, alto){
  if (mouseX>x - ancho/2 && mouseX<x + ancho/2 &&
    mouseY>y - alto/2 && mouseY<y + alto/2) {
    return true;
  } else {
    return false;
  }
 } 

  function mousePressed (){
    
    if (estado === "enojadoPatada") {
    if (mouseSobrePY(426, 276, 85, 160)) {
      estado = "electrocutado";
     }
    }  
    
    if (estado === "QuedaQuemado") {
    if (botoniz(100, 465, 100, 60)) {
      estado = "caminando";
      CaminarPosX = -75;
      contador = 0
     }
    if (botonder(250, 465, 100, 60)) {
      estado = "caminando";
      CaminarPosX = -75;
      contador = 0
     }
    }  
    }
  
   
