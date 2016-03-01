// Your JS goes here
document.addEventListener('DOMContentLoaded', function(){


  function color(hex) {
    hex += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];
    if (hex.length < 6) color(hex);
    else return hex;


  }

  function createBoard(tiles){
    for (var i = 0; i < tiles; i++) {
    var div = document.createElement('div');
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.float = "left";
    div.style.backgroundColor = '#' + (function co(lor) { 
      return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');
  
      document.body.appendChild(div);
    }
  }

  createBoard(99);


});