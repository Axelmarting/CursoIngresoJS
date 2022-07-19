/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	let mes;
	let mensaje;
	let mensaje1;
	let mensaje2;
	let mensaje3;

	mensaje1 = "Falta para el invierno";
	mensaje2 = "Abrigate que hace frio.";
	mensaje3 = "Ya pasamos el frio, ahora calor!!!."

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!."
			break;

		default:
			mensaje = "Falta para el invierno";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/*
julio agosto son invierno
enero a junio falta para el invierno
septiembre dicimebre ya pasamos el frio ahora calor
*/