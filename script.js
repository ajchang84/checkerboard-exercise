// Your JS goes here
document.addEventListener('DOMContentLoaded', function(){

  function createBoard(tiles){

    for (var i = 0; i < tiles; i++) {
    var div = document.createElement('div');
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.float = "left";
    div.style.backgroundColor = '#'+[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]
                                   +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                   +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                   +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                   +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                   +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]; 
    document.body.appendChild(div);
    }
  }

  createBoard(99);

  var timerID = setInterval (function(){
    for (var i = 1; i < 100; i++) {
    document.body.children[i].style.backgroundColor = '#'+[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]
                                                         +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                                         +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                                         +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                                         +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)] 
                                                         +[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];       
          }

  }, 500);



});