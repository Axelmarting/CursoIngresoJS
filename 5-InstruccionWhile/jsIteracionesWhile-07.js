/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIgresado;
	let promedio;

	contador=0;
	acumulador=0;
	respuesta='si';
	respuesta = respuesta.toLowerCase();

	
	//respuesta sirve para que el usuario ingrese todo lo que quiera.
	while(respuesta == "si"){
		numeroIgresado = prompt("Ingrese un numero");
		numeroIgresado = parseInt(numeroIgresado);

		acumulador += numeroIgresado;  //o acumulador = acumulador + numeroIngresado;

		contador++;

		respuesta = prompt("Queres ingresar otro numero?");
	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = promedio;

	// txtIdSuma.value=acumulador;
	// txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN