var player, playerSprite, arrow, arrowSprite, bow, bowSprite, backgroundimg, bomb, bombSprite

function preload()  {

  player = loadImage("archer.png")

}

function setup() {
  createCanvas(800, 800);
  playerSprite=createSprite(300, 540, 30, 175);
  playerSprite.addImage(player)
  playerSprite.debug = true
}

function draw() {
  background("red"); 
  
if(keyDown("d"))  {
  playerSprite.x = playerSprite.x+3
}
if(keyDown("a"))  {
  playerSprite.x = playerSprite.x-3
}
spawnBombs()


  if(keyDown("space")) {
    spawnArrow()
  }

  drawSprites();
}

function spawnBombs() {
  if(frameCount%120===0)  {
    bombSprite = createSprite(1050, random(75,400), 50, 50)

    bombSprite.lifetime = 150
    bombSprite.velocityX = -5
    bombSprite.velocityY = 5
  }
}

function spawnArrow() {
  arrow = createSprite(300, 540, 50, 50)
  arrow.x = playerSprite.x
  arrow.y = playerSprite.y

  arrow.velocityY = -5
  arrow.velocityX = 5
  
  console.log(playerSprite.y)
}