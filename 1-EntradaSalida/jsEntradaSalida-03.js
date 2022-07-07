/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//nombreIngresado=txtIdNombre.value;

	//El txtIdNombre se saca desde click derecho inspeccionar, asi tomas el dato
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}


//txtIdNombre