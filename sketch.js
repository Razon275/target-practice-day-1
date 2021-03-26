const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pistol,pistolImage;
var bg,bgImage;
var targetCount,targetvar ,targetImage,spawn;
function preload(){
    pistolImage=loadImage("sprites/pistol.png")
    bgImage=loadImage("sprites/images.jpg")
    
}
function setup(){
    createCanvas(1400,1200)
    
    bg=createSprite(800,600);
    bg.addImage(bgImage);
    bg.scale=5.0
    pistol=createSprite(400,630)
    pistol.addImage(pistolImage)
    pistol.scale=0.2;
    
}

function draw(){
    //pistol.x=mouseX;
    spawntarget()
    drawSprites();
    //text(mouseX+","+mouseY,mouseX,mouseY)
    
}

function spawntarget(){
    
    if(frameCount%100===0){ 
    spawn=Math.round(random(1,9))
    
    targetCount=frameCount
    switch(spawn){
        case 1:target=createSprite(285,615,50,50)
        break;
        case 2:target=createSprite(415,615,50,50)
        break;
        case 3:target=createSprite(540,615,50,50)
        break;
        case 4:target=createSprite(670,615,50,50)
        break;
        case 5:target=createSprite(800,615,50,50)
        break;
        case 6:target=createSprite(920,615,50,50)
        break;
        case 7:target=createSprite(1050,615,50,50)
        break;
        case 8:target=createSprite(1190,615,50,50)
        break;
        case 9:target=createSprite(1315,615,50,50)
        break;
    }
     
    }
    if(targetCount+60===frameCount) {
        target.destroy()
    }
}