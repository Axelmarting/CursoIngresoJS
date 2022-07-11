/*Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño 
(menor a 13 años).*/
function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18){
		alert("Es mayor de edad");
	}
	else{
		if(edadIngresada >= 13 && edadIngresada <= 17){
			alert("Es adolescente");
		}
		else{
			alert("Es un ninio");
		}
			
	}
	
}//FIN DE LA FUNCIÓN