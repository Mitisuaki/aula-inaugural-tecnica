let boardX  = 576;
let boardY  = 576;
let size    = 64 ;
let moveX   = 0  ;
let moveY   = 0  ;
let grass        ;
let mainChar     ;
let apple        ;
let button       ;

  
// executado apenas quando o programa é iniciado
function setup() {
  grass    = loadImage("grass.png");
  mainChar = loadImage("crash.png");
  apple    = loadImage("apple.png");
  createCanvas(boardX, boardY);
}

// executado a todo momento até encerrar o programa
function draw() {
  background(220);
    
  for(let posX = 0 ; posX < 9; posX++){
    for(let posY = 0 ; posY < 9; posY++){
      image(grass, posX*size, posY*size, size, size);    
    }    
  }  
  
  image(mainChar, moveX, moveY, size, size); 
       
  if(moveX === boardX-size && moveY === boardY-size){
    // sumir com a maçã
    image(apple, boardX, boardY, size, size);
    // criar um retangulo +texto vitória
    rect(160, 160, 256,256);
    textSize(40);
    text("Parabéns,", 200, 250);
    text("você", 240, 300);
    text("conseguiu!", 200, 350);
    
    // criar botão reset + parar o jogo
    button = createButton("Restart");
    noLoop();
    // função botão reset
    button.mousePressed(ResetGame)
  }
  else{
    image(apple, boardX-size, boardY-size, size, size);
  }
    
}

// Reseta o jogo
function ResetGame() {
  moveX = 0;
  moveY = 0;
  button.remove();
  loop();
}

// Executado uma vez pressionar alguma tecla
function keyPressed() {
  if(keyCode === 87 && moveY >0){
    moveY -= 64;
  }
  if(keyCode === 65 && moveX >0){
    moveX -= 64;
  }
  if(keyCode === 83 && moveY < boardY-size){
    moveY += 64;
  }
  if(keyCode === 68 && moveX < boardX-size){
    moveX += 64;
  }
}
