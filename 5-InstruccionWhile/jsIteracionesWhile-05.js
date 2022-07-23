/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase ();

	while( sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Error, ingrese f ó m .");
		sexoIngresado = sexoIngresado.toLowerCase ();
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN