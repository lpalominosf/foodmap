$(document).ready(function(){
	$('#status').delay(1000).fadeOut('slow');
	$('#preloader').delay(1000).fadeOut();
	$('.second-screen').hide();



	setTimeout(function(){
	$('.second-screen').show();
	}, 1000);

});