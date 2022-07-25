/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador = 0; //variable condicion (primer paso)
	let edadIngresada;
	let nombreIngresado;
	let sumaEdades = 0;
	let promedioEdades;
	let edadPersonaMasJoven;
	let nombrePersonaMasJoven;
	let edadPersonaMasVieja;

	//la condicion (Segundo paso)
	while(contador < 2){
		edadIngresada = prompt("Ingrese edad.");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada <0 || edadIngresada >80)
		{
			edadIngresada = prompt("Error, ingrese una edad entre 0 y 80");
			edadIngresada = parseInt(edadIngresada);
		}
		nombreIngresado = prompt("Ingrese nombre");

		//sacar persona mas joven
		if(contador == 0){
			edadPersonaMasJoven = edadIngresada;
			nombrePersonaMasJoven = nombreIngresado;
		}
		else{
			if(edadIngresada<edadPersonaMasJoven){
				edadPersonaMasJoven = edadIngresada;
				nombrePersonaMasJoven = nombreIngresado;
			}
			else{ //sacar persona mas vieja
				if(edadIngresada > edadPersonaMasVieja){
					edadPersonaMasVieja = edadIngresada;
					nombrePersonaMasVieja = nombreIngresado;
				}
			}
			
		}

		sumaEdades = sumaEdades + edadIngresada;


		alert("Su nombre es :" + nombreIngresado);
		alert("Su edad es : "+  edadIngresada);
		console.log("Su nombre es :" + nombreIngresado + "Su edad es : "+  edadIngresada);
		//modificar la condicion (tercer paso)
		contador ++; //contador = contador + 1;
		console.log("El numero de vueltas es de: " + contador);
	}

}//FIN DE LA FUNCIÓN

/*Contador y acumulador se inicializa en 0 */
/*contador siver para ir contando de a uno
el while se repite mientras sea verdadero*/