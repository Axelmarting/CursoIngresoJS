/*Al ingresar una edad solo debemos informar si la persona 
NO es adolescente.*/
function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	/*si no usaria el !, tendria que usar un ||(o) en vez de un &&(y)
	ya que sino daria siempre false pq si es menor a 13 no va a ser 
	mayor a 17. Recordar que si uso || con tal de que una sola se cumpla
	va a ser true. En el && tienen que ser las dos true para ser true*/
	if(!(edadIngresada >= 13 && edadIngresada <=17)){
		alert("No es adolescente");
	}
 
	alert("Gracias por decir su edad");


}//FIN DE LA FUNCIÓN
/*
operadores logicos

&&  y  (las dos tienen que ser true para cumplirse)
||  o  (una sola tiene que ser true para que se cumpla)
!   opuesto/distinto (niega todo)
*/