/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let respuesta;
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let banderaDelPrimero;
	let nombreTemperaturaMax;
	let temperaturaMax;
	let contadorMayoresViudos=0;
	let contadorHombresViudosSolteros=0;
	let contadorTerceraEdadYTemperaturaMas38=0;
	let acumuladorEdadHombresSolteros=0;
	let contadorEdadHombresSolteros=0;
	let promedio;

	banderaDelPrimero = 0;

	respuesta = "si";

	while(respuesta == "si"){
		nombre = prompt("Ingrese nombre.");

		edad = prompt("Ingrese edad.");
		edad = parseInt(edad);

		sexo = prompt("Ingrese sexo. f o m");
		sexo = sexo.toLowerCase();

		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error ingrese sexo. f o m");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese estado civil. Soltero, casado o viudo.");
		estadoCivil = estadoCivil.toLowerCase();

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error ingrese estado civil. Soltero, casado o viudo.");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese temperatura corporal.");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		// Fin validaciones

		// A

		if(banderaDelPrimero == 0){
			nombreTemperaturaMax = nombre;
			temperaturaMax = temperaturaCorporal;

			banderaDelPrimero =1;
		}
		else{
			if(temperaturaCorporal > temperaturaMax){
				nombreTemperaturaMax = nombre;
				temperaturaMax = temperaturaCorporal;
			}
		}

		// B

		if(estadoCivil == "viudo" && edad > 17){
			contadorMayoresViudos++;
		}

		// C

		switch(sexo){
			case "m":
				if(estadoCivil == "soltero" || estadoCivil == "viudo"){
					contadorHombresViudosSolteros++;
				}
				break;
		}	

		// D

		if(edad > 60 && temperaturaCorporal > 38){
			contadorTerceraEdadYTemperaturaMas38++;
		}

		// E

		if(sexo == "m" && estadoCivil == "soltero"){
			acumuladorEdadHombresSolteros += edad;
			contadorEdadHombresSolteros ++;
		}




		respuesta = prompt("Desea continuar?");
	}
	promedio = acumuladorEdadHombresSolteros / contadorEdadHombresSolteros;

	console.log("El nombre con la persona con mas temperatura es: " + nombreTemperaturaMax);
	console.log("La cantidad de mayores de edad viudos es de: " + contadorMayoresViudos);
	console.log("La cantidad de hombres solteros o viudos es de: " + contadorHombresViudosSolteros);
	console.log("La cantidad de personas de la tercera edad (+60 anios) con mas de 38 de temperatura es de: " + contadorTerceraEdadYTemperaturaMas38);
	console.log("El promedio de edad entre los hombres solteros es de: " + promedio);

}
