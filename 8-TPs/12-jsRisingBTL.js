/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let numeroLegajoIngresado;
	let nacionalidadIngresada;
	let contadorDiezPersonas = 0;

	while(contadorDiezPersonas<10){
		edadIngresada = prompt("Ingresar edad.");
		edadIngresada = parseInt(edadIngresada);

		while(edadIngresada < 18 || edadIngresada > 90){
			edadIngresada = prompt("Error, ingrese una edad entre 18 y 90.");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese sexo: M para masculino y F para femenino.");
		sexoIngresado = sexoIngresado.toUpperCase()

		while(sexoIngresado != "M" && sexoIngresado != "F"){
			sexoIngresado = prompt("Error ingrese sexo: M para masculino y F para femenino.");
			sexoIngresado = sexoIngresado.toUpperCase();
		}

		estadoCivilIngresado = prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);

		while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4){
			estadoCivilIngresado = prompt("Error ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
			estadoCivilIngresado = parseInt(estadoCivilIngresado);
		}

		sueldoBrutoIngresado = prompt("Ingrese sueldo bruto no menor a 8000.");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

		while(sueldoBrutoIngresado<8000){
			sueldoBrutoIngresado = prompt("Error ingrese sueldo bruto no menor a 8000.");
			sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
		}

		numeroLegajoIngresado = prompt("Ingrese numero de legajo. numérico de 4 cifras, sin ceros a la izquierda.");
		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);

		while(numeroLegajoIngresado<1000){
			numeroLegajoIngresado = prompt("Error ingrese numero de legajo. numérico de 4 cifras, sin ceros a la izquierda.");
			numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
		}

		nacionalidadIngresada = prompt("Ingrese nacionalidad. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

		while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
			nacionalidadIngresada = prompt("Error, ingrese nacionalidad. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
			nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
		}

		document.getElementById("txtIdEdad").value = edadIngresada; 
		document.getElementById("txtIdSexo").value = sexoIngresado;
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
		document.getElementById("txtIdSueldo").value = sexoIngresado;
		document.getElementById("txtIdLegajo").value = numeroLegajoIngresado;
		document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;

		contadorDiezPersonas++;
	}
	console.log("La cantidad de personas es de: " + contadorDiezPersonas);
}
/*
txtIdEdad
txtIdSexo
txtIdEstadoCivil
txtIdSueldo
txtIdLegajo
txtIdNacionalidad
 */

/*---------------------------------------------------------------------
let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let numeroLegajoIngresado;
	let nacionalidadIngresada;
	let contadorDiezPersonas = 0;

	edadIngresada = prompt("Ingresar edad.");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90){
		edadIngresada = prompt("Error, ingrese una edad entre 18 y 90.");
		edadIngresada = parseInt(edadIngresada);
	}

	sexoIngresado = prompt("Ingrese sexo: M para masculino y F para femenino.");
	sexoIngresado = sexoIngresado.toUpperCase()

	while(sexoIngresado != "M" && sexoIngresado != "F"){
		sexoIngresado = prompt("Error ingrese sexo: M para masculino y F para femenino.");
		sexoIngresado = sexoIngresado.toUpperCase();
	}

	estadoCivilIngresado = prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4){
		estadoCivilIngresado = prompt("Error ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	sueldoBrutoIngresado = prompt("Ingrese sueldo bruto no menor a 8000.");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

	while(sueldoBrutoIngresado<8000){
		sueldoBrutoIngresado = prompt("Error ingrese sueldo bruto no menor a 8000.");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}

	numeroLegajoIngresado = prompt("Ingrese numero de legajo. numérico de 4 cifras, sin ceros a la izquierda.");
	numeroLegajoIngresado = parseInt(numeroLegajoIngresado);

	while(numeroLegajoIngresado<1000){
		numeroLegajoIngresado = prompt("Error ingrese numero de legajo. numérico de 4 cifras, sin ceros a la izquierda.");
		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
	}

	nacionalidadIngresada = prompt("Ingrese nacionalidad. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
		nacionalidadIngresada = prompt("Error, ingrese nacionalidad. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
	}

	document.getElementById("txtIdEdad").value = edadIngresada; 
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sexoIngresado;
	document.getElementById("txtIdLegajo").value = numeroLegajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
	*/