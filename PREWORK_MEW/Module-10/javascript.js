$(document).ready(function(){

// When button1 is clicked...
$("#button1").on("click", function() {
	//Increase the height of the box.
	$("#box").animate({height:"+=100px"}, "fast")
})

//When button2 is clicked...
$("#button2").on("click", function() {
	//Change color of box to blue.
	$("#box").css("background-color", "blue")
})

//When button3 is clicked...
$("#button3").on("click", function() {
	//Fade out box.
	$("#box").css("opacity", "0.2")
})

//When button4 is clicked...
$("#button4").on("click", function() {
	//Return to original CSS.
	$("#box").css({"height":"150px","width":"150px","background-color":"orange","margin":"25px","opacity":"1", "border":"none"})
})

//When button5 is clicked...
$("#button5").on("click", function() {
	//Add 5px dotted pink border to the box.
	$("#box").css("border", "5px dotted pink")
})

//When button6 is clicked...
$("#button6").on("click", function() {
	//Move box to the right.
	$("#box").css("margin-left","+=100px")
})

});