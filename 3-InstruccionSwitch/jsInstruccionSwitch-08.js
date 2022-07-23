function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Hace frio";
			break;
		default:
			mensaje = "Hace calor";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
//txtIdDestino