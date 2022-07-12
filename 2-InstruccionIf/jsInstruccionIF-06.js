/*Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño 
(menor a 13 años).*/
/*function mostrar()
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
	
}//FIN DE LA FUNCIÓN*/
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (entre 5 a 13 años) o es bebe(menor a 4 años)
o si supera los 60 años de edad es anciano
tambien la edad ingresada */
function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	// if(edadIngresada >= 18){
	// 	alert("Es mayor de edad y la edad es: " + edadIngresada);
	// }
	// else{
	// 	if(edadIngresada >= 13 && edadIngresada <= 17){
	// 		alert("Es adolescente y la edad es: " + edadIngresada);
	// 	}
	// 	else{
	// 		if(edadIngresada >= 5 && edadIngresada <= 13){
	// 			alert("Es un ninio y la edad es de: " + edadIngresada);
	// 		}
	// 		else{
	// 			alert("Es un bebe y la edad es de: " + edadIngresada);
	// 		}
	// 	}
	// }


	if(edadIngresada >= 60){
		alert("Es anciano y la edad es de: " + edadIngresada);
	}
	else{
		if(edadIngresada >= 18){
			alert("Es mayor de edad y la edad es: " + edadIngresada);
		}
		else{
			if(edadIngresada >= 13 && edadIngresada <= 17){
				alert("Es adolescente y la edad es: " + edadIngresada);
			}
			else{
				if(edadIngresada >= 5 && edadIngresada <= 13){
					alert("Es un ninio y la edad es de: " + edadIngresada);
				}
				else{
					alert("Es un bebe y la edad es de: " + edadIngresada);
				}
			}
		}
	}
}//FIN DE LA FUNCIÓN

