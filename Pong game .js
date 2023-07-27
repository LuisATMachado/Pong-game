//var da bola
let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro /2;

//velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//var da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//desenho do fundo do tabuleiro
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  moviBola();
  verifiBorda();
  mostraPau();
  moviRaq();
}

//desenho da bola
function mostraBola(){
  circle(xBola, yBola, diametro)
  
}

//movimentação da bola
function moviBola(){
  xBola += velocidadeXBola
  yBola += velocidadeYBola
  
  
}

//verificar a colisão da borda
function verifiBorda(){
  if (xBola + raio> width ||
     xBola - raio< 0){
    velocidadeXBola *= -1;
  }
  
  if (yBola + raio> height ||
     yBola - raio< 0){
    velocidadeYBola *= -1
  }
  
}

function mostraPau(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
  
}

//movimentação raquete
function moviRaq(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}