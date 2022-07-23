function mostrar()
{
	let mesDelAnio;
	let mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Tiene 31 dias";
			break;
		case "Febrero":
			mensaje = "Tiene 28 dias";
			break;
		default:
			mensaje = "Tiene 30 dias";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
//txtIdMes