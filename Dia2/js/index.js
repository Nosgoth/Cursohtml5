/* Activación del slider */
$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
//------------------------------------------------
/* Formato del slider */
$(document).ready(function() {
  $('.ba-slider').beforeAfter();
});
//------------------------------------------------
// Configuramos la librería jQuery Accordion
$('.accordion').accordion({
  transitionSpeed: 400,        // velocidad del acordeón
  transitionEasing: 'ease'    // ritmo del acordeón (linear, ease-in…)
});
//------------------------------------------------
// Configuramos la librería Ouibounce
ouibounce(document.getElementById('modal-card'), {
  aggressive: true, // borra la cookie viewedOuibounceModal
  timer: 5   // espera (evita falsos positivos)
});

// Opcional (activa a los 5 segundos)
var modal = ouibounce(document.getElementById('modal-card'), {
  aggressive: true, // borra la cookie viewedOuibounceModal
  timer: 5   // espera (evita falsos positivos)
});
setTimeout(function() { modal.fire() }, 5000);    // muestra a los 5seg
//------------------------------------------------
// Función de ventana de alerta
//function mensaje() {
  //swal({
   // title: 'Título',
  //  text: 'Mensaje de texto',
  //  html: '<p>Mensaje de texto con //<strong>formato</strong>.</p>',
    //type: 'success',
  //  timer: 3000,
//  });
//}

//function mensaje() {
  //swal({
  //  title: 'Título',
  //  text: 'Mensaje de texto',
  //  type: 'success',
   // showCloseButton: true,
   // confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Bien!',
  //  confirmButtonColor: '#1db75a',
   // showCancelButton: true,
   // cancelButtonText: '<i class="fa fa-thumbs-down"></i> :(',
  //}).then(
   // function() { swal('¡Aceptado!') },
  //  function() { swal('¡Cancelado!') }
 // );
//}

function mensaje() {
  swal({
    title: 'Título',
    text: 'Mensaje de texto',
    imageUrl: 'http://www.cerotec.net/aplicaciones/pizarra/data/foto/por-que-los-gatos-ronronean.jpg',
    imageWidth: 440,
    imageHeight: 250,
    padding: 20,
    animation: false,
  });
}

//------------------------------------------------
// Función de ventana de alerta
function mensaje2() {

  humane.log('Mensaje de texto', {
    timeout: 4000,
    clickToClose: true
  });
}

//------------------------------------------------
// Función de ventana de alerta
function mensaje3() {

  // error, success, info, warning  
  toastr.error('Aquí el mensaje de texto.', 'Título de notificación');        

  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    timeOut: 2000,
  }
}