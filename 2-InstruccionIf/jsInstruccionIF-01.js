function mostrar()
{
	let edadIngresada;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//si edad es = a 15 es TRUE, se va a cumplir, si no, lo va a ignorar
	//y va a ir al ultimo alert directo
	if(edad == 15){
		alert("Es una ninia");
	}
	 
	alert("Gracias por decir su edad");

}//FIN DE LA FUNCIÓN

/*
operadores relacionales:
==  (se usa doble == ya que si usas uno solo es para asignar valores)
>
<
>=
<=
!=  distinto
*/