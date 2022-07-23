/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = prompt("Ingrese un numero entre 0 y 9 inclusive");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 9 || numeroIngresado < 0){
		numeroIngresado = prompt("Error, ingrese un numero en rte 0 y 9 inclusive");
		numeroIngresado = parseInt(numeroIngresado);
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;


}//FIN DE LA FUNCIÓN
//txtIdNumero
// en el while se pregunta lo que no quiero