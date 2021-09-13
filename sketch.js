var rect1,rect2,rect3,rect4;
var rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20;
var triangle1;
var blueghost,redghost,pinkghost,yellowghost;
var blueghostimg;
var pinkghostimg;
var redghostimg;
var pacman,pacmanimg;
var title;
var titleimg,titleimage;
var burgerdish,tacodish,steakdish;
var burger,taco,steak;
var score = 0;
var gameover,gameoverimg;
var play = 1,end = 0,gameState = play;
function preload() {
titleimg = loadImage("pacmanlogo.png")
blueghostimg = loadImage("blueghost.png")

pinkghostimg = loadImage("pinkghost.png")

redghostimg = loadImage("redghost1.png")

pacmanimg = loadImage("PACMAN1.png")

burgerdish = loadImage("16_burger_dish.png")

tacodish = loadImage("100_taco_dish.png")

steakdish = loadImage("96_steak_dish.png")

gameoverimg = loadImage("gameover3.png")
}

function setup() {
createCanvas(1200,800)
rect1 = createSprite(300,30,400,10)
rect2 = createSprite(300,270,400,10)
rect3 = createSprite(100,100,10,150)
rect4 = createSprite(500,200,10,150)
rect5 = createSprite(125,130,50,10)
rect6 = createSprite(280,80,10,100)
rect7 = createSprite(200,80,50,10)
rect8 = createSprite(230,105,10,60)
//triangle1 = createSprite()
rect9 = createSprite(275,135,100,10)
rect10 = createSprite(360,80,60,10)
rect11 = createSprite(385,100,10,50)
rect12 = createSprite(385,250,10,40)
rect13 = createSprite(385,230,50,10)
rect14 = createSprite(365,200,10,50)
rect15 = createSprite(407,130,55,10)
rect16 = createSprite(430,160,10,70)
rect17 = createSprite(450,60,10,50)
rect18 = createSprite(150,200,10,50)
rect19 = createSprite(230,200,10,50)
rect20 = createSprite(255,230,60,10)
pacman = createSprite(100,250,10,10)
pacman.addImage("PACMAN1",pacmanimg)
pacman.scale = 0.05
blueghost = createSprite(200,60,20,20)
blueghost.addImage("blueghost",blueghostimg)
blueghost.velocityX = 3;
pinkghost = createSprite(300,60,20,20)
pinkghost.addImage("pinkghost",pinkghostimg)
pinkghost.velocityX = 3;
blueghost.scale = 0.08;
pinkghost.scale = 0.08
redghost = createSprite(310,230,20,20)
redghost.velocityY = 3;
redghost.addImage("redghost",redghostimg)
redghost.scale = 0.08
title = createSprite(300,5,10,10)
title.addImage("pacmanlogo",titleimg)
title.scale = 0.5

burger = createSprite(300,115,10,10)
burger.addImage(burgerdish)

taco = createSprite(390,210,10,10)
taco.addImage(tacodish)

steak = createSprite(250,115,10,10)
steak.addImage(steakdish)

gameover = createSprite(600,400,10,10)
gameover.addImage(gameoverimg)

gameover.visible = false;
gameover.scale = 0.1;
}

function draw() {

background(0);
textSize(20)
text("score"+score,420,20)
if(gameState === play) {



if(blueghost.isTouching(rect3) ) {

blueghost.velocityX = 3;

}

if(blueghost.isTouching(rect6)) {

blueghost.velocityX = -3;


}
if(redghost.isTouching(rect2)) {

redghost.velocityY = -3;


}
if(redghost.isTouching(rect9)) {

    redghost.velocityY = 3;
    

    }
    if(pinkghost.isTouching(rect17)) {

        pinkghost.velocityX = -3;
        
        
        }
        if(pinkghost.isTouching(rect6)) {

            pinkghost.velocityX = 3;
            
            
            }

if(keyDown(LEFT_ARROW)) {

pacman.x = pacman.x-2
}

if(keyDown(RIGHT_ARROW)) {

    pacman.x = pacman.x+2;
    }

    if(keyDown(UP_ARROW)) {

        pacman.y = pacman.y-2
        }
        if(keyDown(DOWN_ARROW)) {

            pacman.y = pacman.y+2
            }
          
           
            if(pacman.isTouching(blueghost)|| pacman.isTouching(redghost)|| pacman.isTouching(pinkghost)) {

        
           pacman.x = 100;
           pacman.y = 250;
 
           gameover.visible = true;
         gameState = end;
            }
            
     if(pacman.isTouching(rect1)||

     pacman.isTouching(rect2)||

     pacman.isTouching(rect3)||

     pacman.isTouching(rect4)||

     pacman.isTouching(rect5)||

     pacman.isTouching(rect6)||

     pacman.isTouching(rect7)||

     pacman.isTouching(rect8)||

     pacman.isTouching(rect9)||

     pacman.isTouching(rect10)||
    
     pacman.isTouching(rect11)||

     pacman.isTouching(rect12)||

     pacman.isTouching(rect13)||

     pacman.isTouching(rect14)||

     pacman.isTouching(rect15)||

     pacman.isTouching(rect16)||

     pacman.isTouching(rect17)||
     
     pacman.isTouching(rect18)||
     
     pacman.isTouching(rect19)||
     
     pacman.isTouching(rect20)) {

        pacman.x = 100;
        pacman.y = 250;
     }
     
     if(pacman.isTouching(burger)) {

    
    score = score + 10;

    burger.destroy()

     }
     if(pacman.isTouching(taco)) {

       
        score = score + 10;
    
        taco.destroy()
    
         }
         if(pacman.isTouching(steak)) {

            
            score = score + 10;
        
            steak.destroy()
        
             }
            }
     
     if(gameState === end) {

    blueghost.velocityX = 0;
    redghost.velocityY = 0;
    pinkghost.velocityX = 0;    
    pacman.destroy()
     }
     drawSprites()

}







