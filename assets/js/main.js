
// Slideshow
$("#slideshow > div:gt(0)").hide();
// var slideDiv = document.querySelectorAll('#slideshow > div');
// for(var a = 0; a < 3; a++){
// 	slideDiv[a].style.display = 'none';
// }

setInterval(function() { 
	$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
}, 3000);