document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

//var instance = M.Modal.getInstance(elem);
//instance.open();

//document.getElementById("key_image").instance.

function startGame(){
  document.getElementById("start").style.display= "none";
  document.getElementById("puzzle_1").style.display = "block";
}