let A = "Haz click en PAPYRUS \npara tranquilizarlo";
let B = "SI";
let C = "Volver a electr.... \ncalmarlo?";
function primerTexto(){
  
rectMode (CENTER);
fill (0, 0, 0, 200)
rect (400, 150, 450, 200);

textAlign(CENTER, CENTER)
fill (255);
textSize(40);
text (A, 400, 150);

}

function reinicio(){
  rectMode (CENTER);
fill (0, 0, 0, 200)
rect (100, 465, 100, 60);
rect (250, 465, 100, 60);

rect (175, 370, 270, 90);
 
 textAlign(CENTER, CENTER)
fill (255);
textSize(40);
text (B, 100, 465);
text (B, 250, 465);
textSize(28);
text (C, 175, 370);
}
