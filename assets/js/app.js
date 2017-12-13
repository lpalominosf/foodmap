$(document).ready(function(){
	$('#status').delay(5000).fadeOut('slow');
	$('#preloader').delay(5000).fadeOut();
	$('.second-screen').hide();



	setTimeout(function(){
	$('.second-screen').show();
	}, 5000);

});