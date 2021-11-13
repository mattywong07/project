var matt;
var colour= "yellow"
function setup() {
  createCanvas(400,400);

  matt = createSprite(100,100,50,30);
}

function draw() 
{
  background(colour); 

  if(keyIsDown(RIGHT_ARROW)){
    colour="black"
  }
  if(keyIsDown(LEFT_ARROW)){
    colour="SILVER"
  }





  drawSprites();


}




