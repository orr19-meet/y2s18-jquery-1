// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
$("#moveButton").on("click", function(){
	var aa = randomX();
	var bb = randomY();
	$("#message").css("top", bb);
	$("#message").css("left", aa);

})
/* END PROVIDED CODE */

// Write your code below this line :)
