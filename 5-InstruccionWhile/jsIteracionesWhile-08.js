/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let contadorNegativos = 0;

	//sumaPositivos y multiplicacionNegativos son acumuladores.
	sumaPositivos=0;
	//si lo inicializas en 0, todo N multiplicado por 0 va a ser 0
	//necesitas un numero que te de lo mismo, o sea 1.
	multiplicacionNegativos=1;

	respuesta='si';
	respuesta = respuesta.toLowerCase();

	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > -1){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			//multiplicacionNegativos *= numeroIngresado;
			contadorNegativos++;
		}

 

		respuesta = prompt("Quiere ingresar otro numero?");
	}

	if(contadorNegativos == 0){
		multiplicacionNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

	// txtIdSuma.value=sumaPositivos;
	// txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
/*
txtIdSuma
txtIdProducto
*/