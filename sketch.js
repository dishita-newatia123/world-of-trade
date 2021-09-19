var player_sprite,trader1_sprite,trader2_sprite,trader3_sprite,trader4_sprite,buy_sprite,sell_sprite;
var PLAY = 1
var END = 0
var gameState,PLAY,END;
var gameState = PLAY ;
var wealth = 100 ;

function preload(){
  player = loadImage("me.png")
  trader1 = loadImage("trader1.png")
  trader2 = loadImage("trader 2.png")
  market = loadImage("market.jpg")
  trader3 = loadImage("trader 3.png")
  trader4 = loadImage("trader 4.png")
  buy = loadImage("buy.png")
  sell=loadImage("sell.png")

}

function setup() {
  createCanvas(1400,1400);


  
  

  player_sprite = createSprite(700,1200,10,10);
  player_sprite.addImage(player);
  player_sprite.scale=0.5

  trader1_sprite = createSprite(90,900,10,10);
  trader1_sprite.addImage(trader1);
  trader1_sprite.scale=0.7

  trader2_sprite = createSprite(900,700,10,10);
  trader2_sprite.addImage(trader2);
  trader2_sprite.scale=0.7

  trader3_sprite = createSprite(600,800,10,10);
  trader3_sprite.addImage(trader3);
  trader3_sprite.scale=0.4
 
  trader4_sprite = createSprite(1000,1000,10,10);
  trader4_sprite.addImage(trader4);
  trader4_sprite.scale=0.8
 
  buy_sprite = createSprite(700,700,10,10);
  buy_sprite.addImage(buy);
  buy_sprite.scale=0.3
  buy_sprite.visible = false ;

  sell_sprite = createSprite(790,700,10,10);
  sell_sprite.addImage(sell);
  sell_sprite.scale=0.09
 sell_sprite.visible = false ;

  
 
}

function draw() {
  background(market);  

  if (gameState === PLAY){

  
  if(keyDown(UP_ARROW)){
    player_sprite.y = player_sprite.y-5  
  }

  if(keyDown(DOWN_ARROW)){
    player_sprite.y = player_sprite.y+5  
  }

  if(keyDown(LEFT_ARROW)){
    player_sprite.x = player_sprite.x-5  
  }

  if(keyDown(RIGHT_ARROW)){
    player_sprite.x = player_sprite.x+5  
  }

  
    player_sprite.collide(trader1_sprite)
    player_sprite.collide(trader2_sprite)
    player_sprite.collide(trader3_sprite)
    player_sprite.collide(trader4_sprite)

    if(wealth === 10000){
      textSize(70)
    fill("pink")
    stroke("black")
    strokeWeight(7)
    text("you win !! ",100,80)
    gameState = END 
    }
  
    

    if(keyDown("Space")){
      buy_sprite.visible = true ;
      sell_sprite.visible = true ;
  
    }

    if(mouseClicked(buy_sprite)){
      wealth = wealth - 20
    
    }
    /*if(mousePressedOver(sell_sprite)){
      wealth = wealth + 20 
    }*/

 
  textSize(30)
  fill("white")
  stroke("black")
  strokeWeight(7)
  text("wealth : " + wealth ,100,80)

  if(wealth< 10){
    gameState = END
    textSize(60)
    fill("yellow")
    stroke("black")
    strokeWeight(7)
    text("you lose",100,80)
  }
}

if ( gameState === END ){
  
  textSize(40)
      fill("white")
      stroke("black")
      strokeWeight(7)
      text("Game Over",100,80)
      text ("press 'r' to resart game ")
}

if(keyDown("r")){
  gameState = PLAY
  wealth = 100
}
 
drawSprites();

}