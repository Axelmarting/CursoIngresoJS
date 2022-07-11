function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18){
		alert("Es mayor de edad");
	}
	//tomo la edad  
	alert("Gracias por decir su edad");
	

}//FIN DE LA FUNCIÓN