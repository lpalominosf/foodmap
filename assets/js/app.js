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

  // Muestra los elementos filtrados
  function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

  // Esconde elementos que no han sido seleccionados
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

// Agrega una clase activa al boton seleccionado
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}