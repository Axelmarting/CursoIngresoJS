/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre");

	//Se da vuelta para mostrar datos en el cuadro de texto
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

