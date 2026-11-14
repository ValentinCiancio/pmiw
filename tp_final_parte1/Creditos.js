let y1 = 0;
let velocidad = 2;

function PantallaCreditos(){
  
   fill(0);
   textSize(50);
   textAlign(CENTER, TOP);
   text(BotonC[4], 400, y1);
  
  y1 -= velocidad;
  
   if (y1 <= -360) {
    y1 = height;
  }
  
  rectMode(CENTER);
  fill (220, 20, 60);
  rect(110, 360, 180, 110);
  fill(255);
  textSize (24);
  textAlign(CENTER, CENTER)
  text(BotonC[0], 110, 360);
}
