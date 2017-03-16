var data = {
  labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
  series: [{ data: [2, 4, 6, 8, 10, 12] }, // ct-series-a
           { data: [1, 2, 3, 4, 5, 6] },// ct-series-b
           { data: [5,7, 3, 2, 6, 6] },
           { data: [12, 10, 8, 6, 4, 2] }  // ct-series-c
          ]
};

var options = {}

new Chartist.Line('.chart', data, options);

var data2 = {
  //labels: ['A1', 'A2', 'A3', 'A4'],
  series: [20, 10, 30, 40]
}

var options2 = {
   //donut: true,
   //donutWidth: 40,
   //startAngle: 270,
   //total: 200
}

new Chartist.Pie('.chart2', data2, options2);
//--------------------------------------------------

var sample = 'A->C: Uno \n B->C: Dos \n B->A: Tres';

var diagram = Diagram.parse(sample);

diagram.drawSVG('diagram', {
    theme: 'hand'    // o 'simple'
});
//--------------------------------------------------

var sample = 'digraph g {A -> B [label="1"];B -> B; C -> B [style=dashed]; D [color=red]}';

var options = {
  format: 'svg'
  // format: 'png-image-element'
}

var image = Viz(sample, options);
var main = document.getElementById('main');

main.innerHTML = image;        // SVG
//main.appendChild(image);    // PNG
//--------------------------------------------------

// Configuramos la librería jQuery Flip
$('#card').flip({
  axis: 'y',                // 'x' para giro en eje X
  trigger: 'click',        // 'hover': giro sobre tarjeta
  speed: 500,                // Velocidad del giro
});
//--------------------------------------------------

var ua = navigator.userAgent;
var parser = new UAParser();

var navegador = parser.getBrowser();
alert(navegador.name);
//--------------------------------------------------

$('#clock').flipcountdown({
  size: 'lg',                            // Tamaño grande
  beforeDateTime: '3/16/2017 19:02:00',   // Fecha a contar
});
//--------------------------------------------------