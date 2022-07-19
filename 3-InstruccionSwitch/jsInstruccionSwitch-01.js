/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()
{
	let mes;
	let mensaje;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
			mensaje = "que comiences bien el año!!!";
			break;

		case "Marzo":
			mensaje = "A clases!!";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!!";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!";
			break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN

/*variable a comparar por igualdad caracteres, strings, enteros
Ej switch: (queda mas optimizado en la mayoria de los casos)

	switch(letra){
		case "a":
			alert("Es la letra a")
			break;

		case "e":
			alert("Es la letra e")
			break;

		default:
			alert("Es la letra i")
	}
Adentro de los case podes hacer la operacion que quieras;
Es importante usar el break pq sino sigue de largo al otro caso;
En el case va con lo que queres comparar.
El default es el else. Cualquier cosa que no entre arriba va al fedault.
Cuando se comprar copn texto va siempre entre comillas.
Ej if:

	let letra

	if(letra == "a){
		{

		}
		else{
			if(letra == "e"){

			}
			else{
				alert("Es la letra i")
			}
		}
	}
*/