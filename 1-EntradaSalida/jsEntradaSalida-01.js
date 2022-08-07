/*
3)Nos ingresan una cantidad indeterminada de vuelos,
validando los datos ingresados:

nombre del pasajero ,aerolínea ( “Aerolíneas
Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
cantidad de horas de vuelo (entre 0 y 8).

Informar:
a) La aerolínea más elegida.
b) El nombre del pasajero que más horas viajó.
c) El promedio de horas de vuelo a Bariloche.
*/

function mostrar()
{
	let respuesta;
	let nombre;
	let aerolinea;
	let destino;
	let cantidadHorasVuelo;
	let contadorArgentinas=0;
	let contadorJetsmart=0;
	let contadorFlybondi=0;
	let aerolineaMasElegida;
	let banderaDelPrimero;
	let cantidadHorasMax;
	let nombreCantidadHorasMax;
	let acumuladorHorasBariloche=0;
	let contadorBariloche=0;
	let promedioHorasVueloABariloche;

	banderaDelPrimero = 0;

	respuesta = "si";

	while(respuesta == "si"){
		nombre = prompt("Ingrese nombre del pasajero");

		aerolinea = prompt("Ingrese aerolinea. aerolineas argentinas, jetsmart o flybondi");
		aerolinea = aerolinea.toLowerCase();

		while(aerolinea != "aerolineas argentinas" && aerolinea != "jetsmart" && aerolinea != "flybondi"){
			aerolinea = prompt("Error ingrese aerolinea. aerolineas argentinas, jetsmart o flybondi");
			aerolinea = aerolinea.toLowerCase();
		}

		destino = prompt("Ingrese destino. bariloche, cataratas o salta");
		destino = destino.toLowerCase();

		while(destino != "bariloche" && destino != "cataratas" && destino != "salta"){
			destino = prompt("Error ingrese destino. bariloche, cataratas o salta");
			destino = destino.toLowerCase();
		}

		cantidadHorasVuelo = prompt("Ingrese la cantidad de horas de vuelo entre 0 y 8");
		cantidadHorasVuelo = parseFloat(cantidadHorasVuelo);

		while(cantidadHorasVuelo < 1 || cantidadHorasVuelo > 7){
			cantidadHorasVuelo = prompt("Error ingrese la cantidad de horas de vuelo entre 0 y 8");
			cantidadHorasVuelo = parseFloat(cantidadHorasVuelo);
		}

		// Fin validaciones.

		// A.
		switch(aerolinea){
			case "aerolineas argentinas":
				contadorArgentinas++;
				break;
			case "flybondi":
				contadorFlybondi++;
				break;
			default:
				contadorJetsmart++;
				break;
		}

		// B.
		if(banderaDelPrimero == 0){
			nombreCantidadHorasMax = nombre;
			cantidadHorasMax = cantidadHorasVuelo;

			banderaDelPrimero = 1;
		}
		else{
			if(cantidadHorasVuelo > cantidadHorasMax){
				nombreCantidadHorasMax = nombre;
				cantidadHorasMax = cantidadHorasVuelo;
			}
		}

		// C.
		if(destino == "bariloche"){
			acumuladorHorasBariloche+= cantidadHorasVuelo;
			contadorBariloche++;
		}





		respuesta = prompt("Desea continuar?");
	}
	if(contadorArgentinas > contadorFlybondi && contadorArgentinas > contadorJetsmart){
		aerolineaMasElegida = "aerolineas argentinas";
	}
	else{
		if(contadorFlybondi > contadorJetsmart){
			aerolineaMasElegida = "flybondi";
		}
		else{
			aerolineaMasElegida = "jetsmart";
		}
	}

	promedioHorasVueloABariloche = acumuladorHorasBariloche / contadorBariloche;

	document.write("La aerolinea mas elegida es: " + aerolineaMasElegida + "<br>");
	document.write("El nombre del pasajero que más horas viajó es: " + nombreCantidadHorasMax + ", con la siguiente cantidad de horas: " + cantidadHorasMax + "<br>");
	document.write("El promedio de horas de vuelo a Bariloche es: " + promedioHorasVueloABariloche);
}

