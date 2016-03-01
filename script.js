// Your JS goes here
document.addEventListener('DOMContentLoaded', function(){

  function createBoard(tiles){
    var tile1 = "47ab47";
    var tile2 = "3232aa";

    for (var i = 0; i < tiles; i++) {
      var div = document.createElement('div');
      div.style.width = "11.1%";
      div.style.paddingBottom = "11.1%";
      div.style.float = "left";
      if (i % 9 === 0) {
        tile1 = (parseInt(tile1, 16) + 1500).toString(16);
        tile2 = (parseInt(tile2, 16) + 2000).toString(16);
      }
      if (i % 2 === 0) {
        div.style.backgroundColor = "#" + tile1;
      }  
      else {
        div.style.backgroundColor = "#" + tile2; 
      }
      document.body.appendChild(div);
    }
  }

  createBoard(99);


});