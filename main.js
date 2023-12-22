let $lucesdelcirculo = document.querySelectorAll('.luces-circulo')
let contador = 0;
$lucesdelcirculo[contador].classname == '.luces-circulo'
let mostrarluz = ()=>
 {
    if(contador>2)
    contador=0
    let luzactual = $lucesdelcirculo[contador];
    luzactual.classList.add(luzactual.getAttribute('color'))
    contador=contador+1
}
var intervalo = setInterval(mostrarluz, 1000)