function pickImage(id) {
  var value = document.getElementById("spritenum").value;
  document.getElementById(id).src = linkTo(value);
}

function linkTo(num) {
  return "sprites/pkmn-sprite-" + num + ".png";
}
