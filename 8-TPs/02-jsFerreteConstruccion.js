/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{  
    let largo;
    let ancho;
    let largoDoble;
    let anchoDoble;
    let medidasRectangulo;
    let tresHilos;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    largoDoble = largo * 2;
    anchoDoble = ancho * 2;
    medidasRectangulo = largoDoble + anchoDoble;

    tresHilos = medidasRectangulo * 3;

    alert("La cantidad de alambre a comprar para 3 hilos es de: " + tresHilos);

}
function Circulo () 
{
	let radio;
    let medidasCirculo;
    let tresHilos;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    medidasCirculo = radio * 2;

    tresHilos = medidasCirculo * 3;

    alert("La cantidad de alambre a comprar para 3 hilos es de: " + tresHilos);
}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let cal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    cemento = (ancho * largo) * 2;
    cal = (ancho * largo) * 3;
    
    alert ("La cantidad de bolsas de cemento es de: " + cemento + " y la cantidad de bolsas de cal es de: " + cal);
}
/*
txtIdLargo
txtIdAncho
txtIdRadio
*/