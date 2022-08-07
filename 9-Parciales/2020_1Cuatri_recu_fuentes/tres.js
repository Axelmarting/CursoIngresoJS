/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. 
*/
function mostrar()
{
	let respuesta;
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let banderaDelPrimero;
	let temperaturaMax;
	let nacionalidadTemperaturaMax;
	let contadorMayoresSolteros=0;
	let cantidadFSolterasOViudas=0;
	let contadorTerceraEdad=0;
	let contadorMujeresCasadas=0;
	let acumuladorEdadMujeresCasadas=0;
	let promedio;

	banderaDelPrimero = 0;

	respuesta = "si";

	while(respuesta == "si"){
		nombre = prompt("Ingrese nombre");

		nacionalidad = prompt("Ingrese nacionalidad")

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		while(edad < 1){
			edad = prompt("Error ingrese edad > 0");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese sexo. f o m");
		sexo = sexo.toLowerCase();

		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error ingrese sexo. f o m");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese estado civil. soltero casado o viudo");
		estadoCivil = estadoCivil.toLowerCase();

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error ingrese estado civil. soltero casado o viudo");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperatura = prompt("Ingrese temperatura corporal > a 30");
		temperatura = parseInt(temperatura);

		while(temperatura < 31){
			temperatura = prompt("Error ingrese temperatura > 30");
			temperatura = parseInt(temperatura);
		}

		// Fin validaciones;

		// A;
		if(banderaDelPrimero == 0){
			temperaturaMax = temperatura;
			nacionalidadTemperaturaMax = nacionalidad;

			banderaDelPrimero = 1 ;
		}
		else{
			if(temperatura > temperaturaMax){
				temperaturaMax = temperatura;
				nacionalidadTemperaturaMax = nacionalidad;

			}
		}

		// B.
		if(edad > 17 && estadoCivil == "soltero"){
			contadorMayoresSolteros ++;
		}

		// C.
		if(sexo == "f"){
			if(estadoCivil == "soltero" || estadoCivil == "viudo"){
				cantidadFSolterasOViudas ++;
			}
		}

		// D.
		if(edad > 60){
			if(temperatura > 38){
				contadorTerceraEdad ++;
			}
		}

		// E.
		if(sexo == "f" && estadoCivil == "casado"){
			contadorMujeresCasadas ++;
			acumuladorEdadMujeresCasadas += edad;
		}

		respuesta = prompt("Desea continuar?");
	}
	promedio = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;

	console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadTemperaturaMax + " y su temperatura es de: " + temperaturaMax);
	console.log("La cantidad de mayores de edad solteros es de: " + contadorMayoresSolteros);
	console.log("La cantidad de mujeres solteras o viudas es de: " + cantidadFSolterasOViudas);
	console.log("Cantidad de personas mayores a 60 anios y de mas de 38 grados es de: " + contadorTerceraEdad);
	console.log("El promedio de edad de las mujeres casadas es de: " + promedio);
}

