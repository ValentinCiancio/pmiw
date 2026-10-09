let estado = 0;
let puntos = 0;
let portada;
let casaadentro;
let sillon;
let durmiendo;
let afilar;
//let entrar;
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

async function setup() {
  
  createCanvas(800, 450);
  portada = await loadImage("data/acciones/mango_sentado.png");
  casaadentro = await loadImage("data/escenarios/habitacion_sin_jarron_roto.jpg");
  sillon = await loadImage("data/acciones/mango_sentado.png");
  durmiendo = await loadImage("data/acciones/mango_dormido.png");
  afilar = await loadImage("data/acciones/mango_alterado.png");
  //entrar = await loadImage("data/acciones/entra_casa.jpg");
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
  PantallaAdentro10();
  
} else if (estado == 12) {
  PantallaAdentro11();
  
} else if (estado == 13) {
  PantallaAdentro12();
  
} else if (estado == 14) {
  PantallaAdentro13();
  
} else if (estado == 15) {
  PantallaAdentro14();
  
} else if (estado == 16) {
  PantallaAdentro15();
  
 } else if (estado == 17) {
  PantallaAdentro16();
  
 } else if (estado == 18) {
  PantallaAdentro17();
  
 } else if (estado == 19) {
  PantallaAdentro18();
  
  //afuera
 } else if (estado == 20) {
  PantallaAfuera1();
  
 } else if (estado == 21) {
  PantallaAfuera2();
  
} else if (estado == 22) {
  PantallaAfuera3();
  
} else if (estado == 23) {
  PantallaAfuera4();

} else if (estado == 24) {
  PantallaAfuera5();
  
} else if (estado == 25) {
  PantallaAfuera6();
  
} else if (estado == 26) {
  PantallaAfuera7();
  
} else if (estado == 27) {
  PantallaAfuera8();
  
} else if (estado == 28) {
  PantallaAfuera9();
  
} else if (estado == 29) {
  PantallaAfuera10();
  
} else if (estado == 30) {
  PantallaAfuera11();
  
} else if (estado == 31) {
  PantallaAfuera12();
  
} else if (estado == 32) {
  PantallaAfuera13();
  
} else if (estado == 33) {
  PantallaAfuera14();
  
} else if (estado == 34) {
  PantallaAfuera15 ();
  
} else if (estado == 35) {
  PantallaAfuera16 ();
  
} else if (estado == 36) {
  PantallaAfuera17 ();
  
} else if (estado == 37) {
  PantallaAfuera18 ();
  
} else if (estado == 38) {
  PantallaAfuera19 ();
  
} else if (estado == 39) {
  PantallaHabitacion1();
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
      puntos += 10;
    } else if (CursorSobreBoton(580, 380, 235, 70)) {
      estado = 20;
      puntos -= 5;
    }

  } else if (estado == 2) {
    if (CursorSobreBoton(220, 370, 220, 70)) {
      estado = 3;
      puntos += 10;
    } else if (CursorSobreBoton(580, 370, 220, 70)) {
      estado = 4;
      puntos -= 5;
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
      puntos += 10;
    } else if (CursorSobreBoton(580, 360, 200, 80)) {
      estado = 6;
      puntos -= 5;
    }

  } else if (estado == 6) {
    if (CursorSobreBoton(220, 360, 200, 70)) {
      estado = 7;
      puntos += 10;
    } else if (CursorSobreBoton(580, 360, 200, 70)) {
      estado = 8;
      puntos -= 5;
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
    puntos += 10;
  } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 12;           
    puntos -= 5;
  }
  
}  else if (estado == 12) {
  if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
    if (puntos >= 20) {
      estado = 14;     
    } else {
      estado = 13;     
    }
  }
} else if (estado == 13) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 0;
      puntos = 0;    
}

} else if (estado == 14) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 16; 
}
} else if (estado == 15) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 16; 
}

} else if (estado == 16) {
  if (CursorSobreBoton(141, 360, 235, 110)) {
    estado = 17;           
    puntos -= 15;
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 18;           
    puntos += 15;
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 19;           
    puntos -= 5;
  }
  
} else if (estado == 17) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 0;
      puntos = 0; 
}
} else if (estado == 18) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 0;
      puntos = 0; 
    }
} else if (estado == 19) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 0;
      puntos = 0;
    }
    
} else if (estado == 20) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 21;
      puntos += 10;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 22;           
    puntos -= 5;
}

} else if (estado == 21) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 22) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 23;
      puntos -= 5;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 24;           
    puntos += 5;
}

} else if (estado == 23) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 24) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 25;
      puntos -= 5;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 26;           
    puntos += 5;
}
} else if (estado == 25) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 26) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 27;
    }
    
} else if (estado == 27) {
  if (CursorSobreBoton(141, 360, 235, 110)) {
    estado = 30;           
    puntos -= 10;
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 28;           
    puntos += 10;
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 29;           
    puntos += 5;
  }
  
} else if (estado == 28) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 2;
    }
    
} else if (estado == 29) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 35;
    }
    
} else if (estado == 30) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 31;
      puntos += 5;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 34;           
    puntos -= 5;
  }
  
} else if (estado == 31) {
    if (CursorSobreBoton(220, 330, 180, 110)) {
      estado = 32;
      puntos += 10;
    } else if (CursorSobreBoton(580, 360, 235, 110)) {
    estado = 33;           
    puntos += 5;
  }
  
} else if (estado == 32) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 2;
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
    puntos += 5;
  } else if (CursorSobreBoton(400, 360, 235, 110)) {
    estado = 36;           
    puntos += 10;
  } else if (CursorSobreBoton(659, 360, 235, 110)) {
    estado = 37;           
    puntos -= 5;
  }
} else if (estado == 36) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 38;
    }
    
} else if (estado == 37) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 38;
    }
    
} else if (estado == 38) {
    if (CursorSobreBoton(width*0.5, 330, 180, 110)) {
      estado = 2;
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
}
}
