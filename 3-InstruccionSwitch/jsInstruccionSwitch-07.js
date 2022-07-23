function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje = "Se encuentra al Oeste";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte";
			break;
		case "Ushuaia":
			mensaje = "Sen encuentra al Sur";
			break;
		default:
			mensaje = "Se encuentra al Este0";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
//txtIdDestino