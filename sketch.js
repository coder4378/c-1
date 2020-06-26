var bubbles = [];

function setup() {
  createCanvas(600,400);
  
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();
 bubble5 = new Bubble();
 bubble6 = new Bubble();
 bubble7 = new Bubble();
  
}

function draw() {
  
  
  
  
   move();
   display();
  drawSprites();
}
function move (){
background(0,25,200);
  bubble1.move();
  bubble2.move();
  bubble3.move();
  bubble4.move();
  bubble5.move();
    bubble6.move();
  bubble7.move();

  }
function display (){
bubble1.display();
  bubble2.display();
  bubble3.display();
   bubble4.display();
   bubble5.display();
     bubble6.display();
   bubble7.display();

}

   