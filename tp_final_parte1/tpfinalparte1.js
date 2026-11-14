//Valentin Ciancio, Azul Maldonado, Comision n3
//https://youtu.be/Xck5xsoh7Ew

let musica;
let musica2;

let estado = 0;

//adentro
let portada;
let casaadentro;
let sillon;
let durmiendo;
let afilar;
let afuera;
let sillonroto;
let mango_joya;
let mango_comiendo;
let comida_piso;
let zoom;
let joya_lit;
let zoom2;
let joya_partida;
let premio;
let jugar;
let perro_bueno;
let jarron;
let noche;
let durmiendo_senora;
let mango_duerme;
let sillon_noche;
//afuera
let pancheria;
let pancho;
let techo;
let patio;
let callejon;
let auto;
let maulla;
let durmiendo_arriba;
let senora_upa;
let aturdido;
let mango_peleando;
let hambriento;
let paloma;
let tacho;
let sed;
let aguatomar;
let lluvia;
let mangoestanque;
let charco;


async function setup() {
  
  createCanvas(800, 450);
  
  musica = loadSound("data/musica/AdentroM.mp3");
   musica2 = loadSound("data/musica/AfueraM.mp3");
  
  //adentro
  portada = await loadImage("data/acciones/mango_sentado.png");
  casaadentro = await loadImage("data/escenarios/habitacion_sin_jarron_roto.jpg");
  sillon = await loadImage("data/acciones/mango_sentado.png");
  durmiendo = await loadImage("data/acciones/mango_dormido.png");
  afilar = await loadImage("data/acciones/mango_alterado.png");
  afuera = await loadImage("data/escenarios/fondo_mango.jpg");
  sillonroto = await loadImage("data/sillon/sillon_roto.jpg");
  joya = await loadImage("data/acciones/mango_con_collar.png");
  comiendo = await loadImage("data/acciones/mango_comiendo_comida.png");
  comidapiso = await loadImage("data/escenarios/comida_tirada.png");
  zoom = await loadImage("data/escenarios/zoom_joya.jpg");
  joyalit = await loadImage("data/acciones/joya.png");
  zoom2 = await loadImage("data/escenarios/habitacion_zoom.jpg");
  joya_partida = await loadImage("data/acciones/joya_partida.png");
  premio = await loadImage("data/acciones/mango_comiendo_tomando_.png");
  jugar = await loadImage("data/acciones/jugar_juguetes.jpg");
  perro_bueno = await loadImage("data/acciones/perro_juega.jpg");
  jarron = await loadImage("data/escenarios/habitacion.png");
  noche = await loadImage("data/acciones/afuera_noche.jpg");
  durmiendo_senora = await loadImage("data/acciones/senora_durmiendo.jpg");
  mango_duerme = await loadImage("data/acciones/mango_duerme.jpg");
  sillon_noche = await loadImage("data/acciones/durmiendo_sillon.jpg");
  //afuera
  pancheria = await loadImage("data/escenarios/pancheria.png");
  pancho = await loadImage("data/acciones/mango_pancho.jpg");
  techo = await loadImage("data/acciones/mango_techo.jpg");
  patio = await loadImage("data/acciones/patio_.jpg");
  callejon = await loadImage("data/escenarios/callejon_durmiendo.jpg");
  maulla = await loadImage("data/escenarios/maulla.jpg");
  durmiendo_arriba = await loadImage("data/escenarios/durmiendo_arriba.jpg");
  auto = await loadImage("data/escenarios/auto_dormir_web.png");
  senora_upa = await loadImage("data/acciones/senora_upa.jpg");
  aturdido = await loadImage("data/acciones/aturdido.jpg");
  mango_peleando = await loadImage("data/acciones/mango_peleando.jpg");
  hambriento = await loadImage("data/acciones/hambirento.jpg");
  paloma = await loadImage("data/acciones/paloma.jpg");
  tacho = await loadImage("data/acciones/tacho.jpg");
  sed = await loadImage("data/acciones/sed.jpg");
  aguatomar = await loadImage("data/acciones/aguatomar.jpg");
  lluvia = await loadImage("data/acciones/lluvia.jpg");
  mangoestanque = await loadImage("data/acciones/mangoestanque.png");
  charco = await loadImage("data/acciones/charco.png");
}


function draw() {
  background (176, 196, 222);

//adentro
if (estado == 0) {
  image (portada, 350, 100, 300, 300);
   PantallaDeInicio();
  
 } else if (estado == 1) {
    image (afuera, 0, 0, 800, 450);
     Pantalla1();
    
} else if (estado == 2) {
  image (casaadentro, 0, 0, 800, 450);
  image (comiendo, 314, 235, 150, 150);
   PantallaAdentro1();
  
} else if (estado == 3) {
  image (casaadentro, 0, 0, 800, 450);
  image (premio, 430, 250, 150, 150);
  PantallaAdentro2();
  
} else if (estado == 4) {
  image (comidapiso, 0, 0, 800, 450);
  image (afilar, 330, 185, 135, 135);
  PantallaAdentro3();
  
} else if (estado == 5) {
  image (casaadentro, 0, 0, 800, 450);
  image (sillon, 45, 190, 130, 130);
  PantallaAdentro4();
  
} else if (estado == 6) {
  image (sillonroto, 0, 0, 800, 450);
  image (joya, 45, 190, 130, 130);
  PantallaAdentro5();
  
} else if (estado == 7) {
  image (zoom, 0, 0, 800, 450);
  image (sillon, 360, 170, 220, 220);
  image (joyalit, 290, 320, 120, 120);
  PantallaAdentro6();
  
} else if (estado == 8) {
  image (zoom2, 0, 0, 800, 450);
  image (joya_partida, 282, 200, 140, 140);
  PantallaAdentro7();
  
} else if (estado == 9) {
  PantallaAdentro8();
  
} else if (estado == 10) {
  image (casaadentro, 0, 0, 800, 450);
  image (durmiendo, 45, 190, 130, 130);
  PantallaAdentro9();
  
} else if (estado == 11) {
  image (jugar, 0, 0, 800, 450);
  PantallaAdentro10();
  
} else if (estado == 12) {
  image (jarron, 0, 0, 800, 450);
  PantallaAdentro11();
  
} else if (estado == 13) {
  image (noche, 0, 0, 800, 450);
  PantallaAdentro12();
  
} else if (estado == 14) {
  PantallaAdentro13();
  
} else if (estado == 15) {
  image (perro_bueno, 0, 0, 800, 450);
  PantallaAdentro14();
  
} else if (estado == 16) {
  image (durmiendo_senora, 0, 0, 800, 450);
  PantallaAdentro15();
  
 } else if (estado == 17) {
   image (noche, 0, 0, 800, 450);
  PantallaAdentro16();
  
 } else if (estado == 18) {
  image (mango_duerme, 0, 0, 800, 450);
  PantallaAdentro17();
  
 } else if (estado == 19) {
  image (sillon_noche, 0, 0, 800, 450);
  PantallaAdentro18();
  
  //afuera
 } else if (estado == 20) {
  image (pancheria, 0, 0, 800, 450);
  PantallaAfuera1();
  
 } else if (estado == 21) {
  image (pancho, 0, 0, 800, 450);
  PantallaAfuera2();
  
} else if (estado == 22) {
  image (techo, 0, 0, 800, 450);
  PantallaAfuera3();
  
} else if (estado == 23) {
  image (mango_peleando, 0, 0, 800, 450);
  PantallaAfuera4();

} else if (estado == 24) {
  image (hambriento, 0, 0, 800, 450);
  PantallaAfuera5();
  
} else if (estado == 25) {
  image (paloma, 0, 0, 800, 450);
  PantallaAfuera6();
  
} else if (estado == 26) {
  image (tacho, 0, 0, 800, 450);
  PantallaAfuera7();
  
} else if (estado == 27) {
  image (pancho, 0, 0, 800, 450);
  PantallaAfuera8();
  
} else if (estado == 28) {
  image (callejon, 0, 0, 800, 450);
  PantallaAfuera9();
  
} else if (estado == 29) {
  image (auto, 0, 0, 800, 450);
  PantallaAfuera10();
  
} else if (estado == 30) {
  image (patio, 0, 0, 800, 450);
  PantallaAfuera11();
  
} else if (estado == 31) {
  image (maulla, 0, 0, 800, 450);
  PantallaAfuera12();
  
} else if (estado == 32) {
  image (senora_upa, 0, 0, 800, 450);
  PantallaAfuera13();
  
} else if (estado == 33) {
  image (aturdido, 0, 0, 800, 450);
  PantallaAfuera14();
  
} else if (estado == 34) {
  image (durmiendo_arriba, 0, 0, 800, 450);
  PantallaAfuera15 ();
  
} else if (estado == 35) {
  image (sed, 0, 0, 800, 450);
  PantallaAfuera16 ();
  
} else if (estado == 36) {
  image (aguatomar, 0, 0, 800, 450);
  PantallaAfuera17 ();
  
} else if (estado == 37) {
  image (charco, 0, 0, 800, 450);
  PantallaAfuera18 ();
  
} else if (estado == 38) {
  image (lluvia, 0, 0, 800, 450);
  PantallaAfuera19 ();
  
} else if (estado == 39) {
  PantallaHabitacion1();
  
} else if (estado == 50) {
  image (mangoestanque, 0, 0, 800, 450);
  PantallaAfuera17 ();
  
} else if (estado == 60) {
PantallaCreditos();
}
}



function CursorSobreBoton(x, y, ancho, alto) {
  
   if ( mouseX>x - ancho/2 && mouseX<x + ancho/2 &&
    mouseY>y - alto/2 && mouseY<y + alto/2 ) {
      
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (estado == 0) {
    if (CursorSobreBoton(115, 330, 180, 110)) {
      estado = 1;
    }

  } else if (estado == 1) {
    if (CursorSobreBoton(220, 380, 235, 70)) {
      estado = 39;
      if (!musica.isPlaying()) {
      musica.loop(); 
    }
    } else if (CursorSobreBoton(580, 380, 235, 70)) {
      estado = 20;
      if (!musica2.isPlaying()) {
      musica2.loop(); 
    }
    }

  } else if (estado == 2) {
    if (CursorSobreBoton(220, 370, 220, 70)) {
      estado = 3;
    } else if (CursorSobreBoton(580, 370, 220, 70)) {
      estado = 4;
    }

  } else if (estado == 3) {
    if (CursorSobreBoton(100, 330, 160, 60)) {   
      estado = 39;
    }

  } else if (estado == 4) {
    if (CursorSobreBoton(100, 330, 160, 60)) {
      estado = 39;
    }

  } else if (estado == 5) {
    if (CursorSobreBoton(220, 360, 200, 80)) {
      estado = 10;
    } else if (CursorSobreBoton(580, 360, 200, 80)) {
      estado = 6;
    }

  } else if (estado == 6) {
    if (CursorSobreBoton(220, 360, 200, 70)) {
      estado = 7;
    } else if (CursorSobreBoton(580, 360, 200, 70)) {
      estado = 8;
    }

  } else if (estado == 7) {
    if (CursorSobreBoton(100, 330, 160, 60)) {
      estado = 39;
    }
    
  } else if (estado == 8) {
    if (CursorSobreBoton(width*0.5, 400, 160, 60)) {
      estado = 39;
}
  } else if (estado == 9) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 11;
    }
    
} else if (estado == 10) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 39;
      }
      
} else if (estado == 11) {
  if (CursorSobreBoton(220, 360, 235, 110)) {
    estado = 15;           
  } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 12;           
  }
  
}  else if (estado == 12) {
  if (CursorSobreBoton(220, 360, 235, 110)) {
    estado = 14;           
  } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 13;           
  }
  } else if (estado == 13) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 60;
      y1 = height;
}

} else if (estado == 14) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 16; 
}
} else if (estado == 15) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 39; 
}

} else if (estado == 16) {
  if (CursorSobreBoton(141, 360, 235, 110)) {
    estado = 17;           
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 18;           
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 19;           
  }
  
} else if (estado == 17) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 60;
      y1 = height;
    }
    
} else if (estado == 18) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 60;
      y1 = height;
    }
} else if (estado == 19) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 60;
      y1 = height;
    }
    
} else if (estado == 20) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 21;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 22;           
}

} else if (estado == 21) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 22) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 23;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 24;           
}

} else if (estado == 23) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 24) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 25;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 26;           
}
} else if (estado == 25) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 26) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 27) {
  if (CursorSobreBoton(141, 360, 235, 110)) {
    estado = 30;           
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 28;           
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 29;           
  }
  
} else if (estado == 28) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 2;
      musica2.stop();
      musica.loop(); 
    }
    
} else if (estado == 29) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 35;
    }
    
} else if (estado == 30) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 31;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 34;           
  }
  
} else if (estado == 31) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 32;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 33;           
  }
  
} else if (estado == 32) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 2;
      musica2.stop();
      musica.loop(); 
    }
    
} else if (estado == 33) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 35;
    }
    
} else if (estado == 34) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 35;
    }
    
} else if (estado == 35) {
  if (CursorSobreBoton(141, 360, 235, 110)) {
    estado = 36;           
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 50;           
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 37;           
  }
} else if (estado == 36) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 38;
    }
    
} else if (estado == 37) {
    if (CursorSobreBoton(650, 330, 180, 110)) {
      estado = 38;
    }
    
} else if (estado == 38) {
    if (CursorSobreBoton(150, 330, 180, 110)) {
      estado = 2;
      musica2.stop();
      musica.loop(); 
    }
    
    
    
} else if (estado == 39) {
    if (CursorSobreBoton(120, 290, 150, 150)) {
      estado = 5;
      
    } else if (CursorSobreBoton(460, 300, 100, 100)) {
    estado = 2;           
    
} else if (CursorSobreBoton(610, 422, 100, 40)) {
    estado = 11;           
    
}else if (CursorSobreBoton(720, 160, 90, 200)) {
    estado = 16;        
    
} 
} else if (estado == 50) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 38;
    }
} else if (estado == 60) {
  if (CursorSobreBoton(110, 360, 180, 110)) {
    estado = 0;
    musica.stop();
    musica2.stop();
}
}
}
