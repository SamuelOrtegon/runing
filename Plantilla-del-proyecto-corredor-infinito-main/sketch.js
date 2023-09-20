var man,manrunning, mencollided;






function preload(){
manrunning=loadAnimation("correr1","correr2")

}

function setup() {
 CreateCanvas(600,400);
 man=createSprite(50,160,20,50)



}

function draw() {
 drawSprites();
}