$(document).ready(function(){
	$('#status').delay(3000).fadeOut('slow');
	$('#preloader').delay(3000).fadeOut();
	$('.second-screen').hide();



	setTimeout(function(){
	$('.second-screen').show();
	}, 3000);

});