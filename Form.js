class Form {

  constructor() {
 
    this.button = createButton('Start');
    this.instructions = createElement('h3');
    this.title = createElement('h1');


  }
  hide(){
    this.instructions.hide();
    this.button.hide();
    
    this.title.hide();
  }

  display(){
    this.title.html("World of trade");
    this.title.position(displayWidth/2 - 50, 0);
    this.instructions.html("Instructions : use arrow keys to move.press space to buy or sell items.press the home button to return to home screen .")
   
    this.button.position(displayWidth/2 + 30, displayHeight/2);
   

    this.button.mousePressed(()=>{
   
      this.button.hide();
     
    });
this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);
})
}
  
}
