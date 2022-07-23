/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(numeroIngresado < 6){
		contador ++;

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado; // acumulador = acumulador + numeroIngresado;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / vueltas;
	// txtIdSuma.value=acumulador;
	// txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
/*txtIdSuma
txtIdPromedio
*/