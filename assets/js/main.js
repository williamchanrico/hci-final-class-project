
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


function validate(){
	var name = $('#fName').val();
	var address = $('#fAddress').val();
	var product = $('#fProduct').val();
	var qty = $('#fQty').val();
	var pay = $('.fPayment').is(':checked');
	var agree = $('#fAgree').is(':checked');
	if(name.trim(' ') == '') {
		$('.error-message ul').append('<li>Name must be filled !</li>');
	} else if(name.length < 5){
		$('.error-message ul').append('<li>Name must be more than 5 characters !</li>');
	} else if(address.trim(' ') == ''){
		$('.error-message ul').append('<li>Address must be filled !</li>');
	} else if(address.indexOf('Street') < 0){
		$('.error-message ul').append('<li>Address must be contains Street !</li>');
	} else if(product == '') {
		$('.error-message ul').append('<li>Product must be choosen !</li>');
	} else if(qty == ''){
		$('.error-message ul').append('<li>Quantity must be filled !</li>');
	} else if(isNaN(qty)){
		$('.error-message ul').append('<li>Quantity must be number !</li>');
	} else if(parseInt(qty) < 1){
		$('.error-message ul').append('<li>Quantity must be more than 1 !</li>');
	} else if(!pay){
		$('.error-message ul').append('<li>Payment Method must be selected !</li>');
	} else if(!agree){
		$('.error-message ul').append('<li>Must be agree !</li>');
	} else {
		alert('Success Purchase the product :)');
		$('form')[0].reset();
	}
	
}
$('form').submit(function(e){
	$('.error-message ul').html('');
	e.preventDefault();
	validate();
});