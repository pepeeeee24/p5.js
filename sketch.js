function setup(){
    createCanvas(200,200);
    background(125);
    
}

    
function draw(){
    

    if(mouseX < 100 && mouseY< 100 ){
        fill(color('white'));
       
    
    }else if(mouseX < 100 && mouseY> 100){
        fill(color('red'));
    } if(mouseX > 100 && mouseY> 100   )    {
        fill(color('orange'));
    }else if(mouseX > 100 && mouseY < 100) 
    fill(color("green"));
    
    
   


    ellipse(mouseX, mouseY, 50,50);
}
