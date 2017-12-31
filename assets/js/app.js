/*
*Función que recarga toda la página
*/

$(document).ready(function(){
  /*
  *Columna donde va el titulo del preloader y tiempo que durará la animación
  */
	$('#status').delay(4000).fadeOut('slow');
	$('#preloader').delay(4000).fadeOut();
	$('.second-screen').hide();


/*
*Función que permite que la animación principal termine y se pase a la segunda pantalla
*/
  setTimeout(function() {
  $('.second-screen').show();
  }, 4000);
});


/*
*https://www.w3schools.com/howto/howto_js_portfolio_filter.asp /// Esto usé para poder realizar el filtro de imágenes
*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

/*
*Muestra los elementos filtrados
*/
  function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

/*
*Esconde elementos que no han sido seleccionados
*/
  function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

/*
*Agrega una clase activa al boton seleccionado
*/
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}
/*
*Esta función llama a cada comida y muestra un mapa con la ubicación del restaurante del tipo de comida recomendado
*/
  $("#chinese-btn").click(function(){
    $("#food1, #food2, #food3").click(function(){
    $("#modal1").show();
    $(".modal-content").append("<span class='glyphicon glyphicon-remove' aria-hidden='true' id='close'></span>"+
                              "<div class='row'><h1 id='titlemodal' class='text-center'>Hao Hwa</h1></div>"+
                              "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53247.633369723146!2d-70.68569774238934!3d-33.47594735191166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59857c39003%3A0x12400b89665ea33e!2sRestaurante+Hao+Hwa!5e0!3m2!1ses!2scl!4v1514663553074' width='300' height='200' frameborder='0' style='border:0' allowfullscreen></iframe>"+
                              "<div class='row'><p class='text-center col-xs-10 col-xs-offset-1' id='addressmodal'>Monjitas 386, Santiago, Región Metropolitana</p></div>" +
                              "<div class='row'><button id='btnmodal' class='btn btn-pedir btn-default col-xs-4 col-xs-offset-4'>Pedir Ahora!</button></div")
  });

    /*
*Función que cierra el modal // no funciona
*/
$('#close').click(function() {
    $(this).parent().hide();
    $(".modal-content").empty();
  });
});

  $("#japanese-btn").click(function(){
    $("#food4, #food5, #food6").click(function(){
    $("#modal1").show();
    $(".modal-content").append("<span class='glyphicon glyphicon-remove' aria-hidden='true' id='close'></span>"+
                              "<div class='row'><h1 id='titlemodal' class='text-center'>Ramen Kintaro</h1></div>"+
                              "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4840805393874!2d-70.64626804967304!3d-33.43669258068359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5985fd62801%3A0x431e8ad43a3eb3ae!2sRamen+Kintaro!5e0!3m2!1ses!2scl!4v1514661516539' width='300' height='200' frameborder='0' style='border:0' allowfullscreen></iframe>"+
                              "<div class='row'><p class='text-center col-xs-10 col-xs-offset-1' id='addressmodal'>Monjitas 460, Santiago, Región Metropolitana</p></div>" +
                              "<div class='row'><button id='btnmodal' class='btn btn-pedir btn-default col-xs-4 col-xs-offset-4'>Pedir Ahora!</button></div")
  });
});

  $("#thai-btn").click(function(){
    $("#food7, #food8, #food9").click(function(){
    $("#modal1").show();
    $(".modal-content").append("<span class='glyphicon glyphicon-remove' aria-hidden='true' id='close'></span>"+
                              "<div class='row'><h1 id='titlemodal' class='text-center'>Thai-Isan</h1></div>"+
                              "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d106553.41908741753!2d-70.7721848!3d-33.4286056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4533d095555%3A0x11be086793f8a152!2sThai-Isan!5e0!3m2!1ses!2scl!4v1514663026537' width='300' height='200' frameborder='0' style='border:0' allowfullscreen></iframe>"+
                              "<div class='row'><p class='text-center col-xs-10 col-xs-offset-1' id='addressmodal'>Huérfanos 2460, Santiago, Región Metropolitana</p></div>" +
                              "<div class='row'><button id='btnmodal' class='btn btn-pedir btn-default col-xs-4 col-xs-offset-4'>Pedir Ahora!</button></div")
    });
  });

$("#food1").mouseover(function(){
  $("food1").val("hola");
});



/*Falta corregir el botón de cierre y el modal que se ve cuatro veces*/