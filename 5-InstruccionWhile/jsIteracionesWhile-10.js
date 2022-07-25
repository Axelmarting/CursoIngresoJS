/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let contadorPositivos=0;
	let contadorNegativos=0;
	let contadorCeros=0;
	let cantidadPares=0;
	let promedioPositivo;
	let promedioNegativo;
	let diferenciaEntrePosiYNega;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){
			sumaNegativos += numeroIngresado;
			contadorNegativos ++;
		}
		else{
			if(numeroIngresado > 0){
				sumaPositivos += numeroIngresado;
				contadorPositivos ++;
			}
		}
		
		if(numeroIngresado == 0){
			contadorCeros ++;
		}

		if(numeroIngresado%2 == 0 && numeroIngresado != 0){
			cantidadPares ++;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while
	promedioPositivo = sumaPositivos / contadorPositivos;
	promedioNegativo = sumaNegativos / contadorNegativos;

	diferenciaEntrePosiYNega = sumaPositivos - sumaNegativos;

	console.log("la suma de negativos es :"+sumaNegativos);
	console.log("la suma de positivos es :"+sumaPositivos);
	console.log("la cantidad de positivos es :"+contadorPositivos);
	console.log("la cantidad de NEGATIVOS es :"+contadorNegativos);
	console.log("la cantidad de 0 es :"+contadorCeros);
	console.log("La cantidad de numeros pares es de : " + cantidadPares);
	console.log("El promedio de positivos es: " + promedioPositivo + " y el de negativos es: " + promedioNegativo);
	console.log("La diferencia entre postivos y negativos es: " + diferenciaEntrePosiYNega);
	
}//FIN DE LA FUNCIÓN