
var dogHappy;
var foodS;
var dog,foodStock;
var database;
function preload()
{
foodStock=database.ref('Food');
foodStock.on("value",readStock);
dogHappy = loadImage("dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
background(46,139,87);
  drawSprites();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x+1;
  }
  database.ref('/').update({
    Food:x
  })
}



