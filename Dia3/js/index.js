// Opción 1: Inicializar cookieBar (genérico, en inglés)
$(document).ready(function(){
  $.cookieBar();
});

//Opción 2: Personalizar mensaje (indicar clase)
$(document).ready(function(){
  $('.cookie-message').cookieBar({
   closeButton: '.close'
  });
});
//----------------------------------------------
$('#input-tags').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
      return { 
        value: input,
        text: input 
      }
    }
});

// return ['tag1', 'tag2', …]
function viewTags() {
  tags = document.getElementById('input-tags');
  console.log(tags.value.split(','));
}

$('#input-tags').selectize({
    plugins: ['remove_button', 
              'drag_drop',
              'optgroup_columns'],
});
//----------------------------------------------
var tabla = document.getElementById('tablesort');
new Tablesort(tabla);