let TextoHistoria = [
"Un\ndia\ncon\nMANGO",
"Es verano, te sentis con hambre y sed, y no \naguantas mas estar debajo del sol, hasta \nque encontras la puerta de una casa abierta.",
"La señora te encuentra y te da un plato de comida \ny agua porque te ve muy hambriento y sediento.",
"La señora al ver que sos un \ngato muy educado te da un premio.",
"La señora te ve, pero entiende que \ndebes estar asustado y lo deja pasar.",
"Te encontras muy cansado y \ndecidis acostarte arriba del sillon",
"Despues de romper todo el sillon terminas \nencontrando una joya brillante entre la tela rasgada.",
"La señora encuentra el desastre que hiciste, pero \nal mismo tiempo no se puede enojar con vos, ya que \nencontraste la joya que le regalo su madre, la cual \nhabia perdido hace tiempo.",
"La señora encuentra el desastre que hiciste, \npor lo que te termina castigando, hechandote agua \ncon un roseador para que te vayas de su casa",
"Terminas durmiendo detras de un \nmueble, sin que la señora se de cuenta",
"La señora te encuentra durmiendo \nplacidamente y te prende la \nestufa para que no pases frio",
"Despues de descansar, te sentis con \nenergias, por lo que empezas a merodear por \nla casa. Donde encontras un monton de \njuguetes de perro esparcidos por el piso",
"La mascota de la señora ve todos sus \njuguetes destrozados junto a vos y empieza a perserguirte \npor toda la casa, te metes debajo de un mueble, \nel perro se lo choca haciendo que el jarron que estaba \nencima se rompa, La señora encuentra a su mascota y a vos \njunto al desastre",
"La señora te hecha de la casa, te das \ncuenta que es de noche por lo que te toca \nencontrar un lugar donde poder dormir",
"La señora reta al perro y lo \ntermina atando afuera como castigo",
"El perro te encuentra jugando \njunto a sus juguetes, por lo que se une a vos \ny empiezan a jugar juntos. La señora los ve \njugando felizmente por lo que piensa \nen adoptarte, ya que nunca vio a su \nmascota tan feliz. Ahora te llamas Mango.",
"Ya es de noche, vas a la habitacion \nde la señora y la encontras durmiendo.",
"La señora hecha a mango \nde la casa, por lo que tenes \nque encontrar un lugar para poder dormir.",
"Te quedas dormido junto \na la señora y sentis por \nfin la comodidad de una casa.",
"La señora se despierta \nasustada y te hecha de la pieza y \nterminas durmiendo solo en el sillon.",
"Te sentis con mucha hambre \ny encontras un local de panchos.",
"Te comes los panchos \ntranki y terminas satifecho",
"Salis corriendo por \nlos techos donde te encontras con \notros gatos que quieren tus salchichas",
"Ganas la pelea y \npodes comer en paz pero \nquedas un poco lastimado",
"Perdes toda tu \ncomida, dejandote sin comer, \npero salis ileso",
"Despues de un rato y \ncon mucho esfuerzo el gato \nconsigue atrapar una paloma",
"Encontras sobras de \npollo en el fondo del terro, no es \nlo mejor pero sacias tu hambre",
"Terminas cansado y necesitas \nun lugar para poder dormir dormir",
"Duermes placidamente. Una \nseñora te encunetra dentro de la caja y al \nverte tan hambriento e \nindefenso, decidio llevarte \npara su casa.",
"El auto se va dejandote \nexpuesto, haciendo que ya no \npodes descansar del susto",
"Un perro te ve y \nempieza a ladrar haciendo \ndemaciado ruido para \npoder dormir",
"La dueña del \nperro te ve y trata de \nalcanzarte",
"La dueña te da \nun poco de atencion y termina \nllevandote dentro de su casa",
"Del susto del perro \nya no podes descansar",
"Descansaste muy mal \ny te quedaste sin fuerzas",
"Empezas a s\nentirte con sed",
"Logras saciar tu sed",
"El agua te cae mal \npor lo que empezas a comer \npasto para sentirte mejor",
"Unas gotitas caen sobre \nel agua que estas tomando, por \nlo que buscas refugio. Encontras \nla ventana abierta de una \ncasa por lo que te metes buscando \nrefugio",
]

let BotonA = [
"Meterse adentro",
"Comer con calma \nsin hacer despelote",
"siguiente",
"Te quedas dormido",
"Llevas la joya \ncon la señora",
"Jugas con los \njuguetes tranquilamente",
"Mearle \nla cama",
"Darle ternura al dueño",
"Pelear con \nlos gatos",
"Acechar palomas \npara comer",
"Techo de \nuna casa",
"Molestar al perro \ndesde el techo",
"Dejar atraparte",
"Tomar de una botella \ncortada de la calle",
]

let BotonB = [
"Quedarse afuera",
"Tirar toda la comida",
"Te afilas las uñas",
"La escondes",
"Rompes todos \nlos juguetes",
"Dormir placidamente \njunto a ella",
"Robar unas salchichas",
"salir coriendo",
"Buscar comida en algun tacho cercano",
"Caja de carton",
"Intentar dormir de todas formas",
"Huir",
"Tomar de una fuente de una plaza",
]

let BotonC = [
"Reiniciar",
"Sentarse encima \nde su cara",
"Bajo un auto",
"Tomar de un charquito",
]

let TextBotonInicio = "MIAU";

function PantallaDeInicio() {
  
   fill(0);
   textSize(45);
   textAlign(LEFT, TOP);
   text(TextoHistoria[0], 20, 20);
   
  rectMode(CENTER);
  fill (220, 20, 60);
  rect(115, 330, 180, 110);
  fill(0);
  textSize (30);
  textAlign(CENTER, CENTER)
  text(TextBotonInicio, 115, 330);
}

function Pantalla1() {
  
   fill(0);
   textSize(30);
   textAlign(CENTER, TOP);
   text(TextoHistoria[1], 400, 30);
  
   rectMode(CENTER);
   fill (220, 20, 60);
   rect(220, 380, 235, 70);
   rect(580, 380, 235, 70);
   textSize (30);
   fill (255);
   textAlign(CENTER, CENTER)
   text(BotonA[0], 220, 380);
   text(BotonB[0], 580, 380);
}
function PantallaHabitacion1() {
   image (casaadentro, 0, 0, 800, 450);
   rectMode(CENTER);
   noStroke ();
   fill (220, 20, 60, 30);
   rect(120, 290, 150, 150);
   rect(460, 300, 100, 100);
   rect(610, 422, 100, 40);
   rect(720, 160, 90, 200);
}
