/*Axel Gonzalez div 2-10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	let random;

	random = Math.floor(Math.random() * 10) + 1;	

	if(random == 9 || random == 10){
		alert("Excelente")
	}
	else{
		if(random >= 4){
			alert("Aprobo")
		}
		else{
			alert("Vamos la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN