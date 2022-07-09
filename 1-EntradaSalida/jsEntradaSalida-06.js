/* consigna 1
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

/*Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.*/

function sumar() //consgina 2
{
	let dolarOficial;
	let dolarBlue;
	let resta;
	let division;
	let porcentaje;
	let mensaje;

	dolarOficial = document.getElementById("txtIdNumeroUno").value;
	dolarOficial = parseFloat(dolarOficial);

	dolarBlue = document.getElementById("txtIdNumeroDos").value;
	dolarBlue = parseFloat(dolarBlue);

	resta = dolarOficial - dolarBlue;
	division = resta / dolarOficial; 
	porcentaje = division * 100;

	mensaje = "La diferencia en porcentaje es del " + porcentaje + "%";

	alert(mensaje);


	/*let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	//opcion 2 de parseint:
	//numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//cuando el usuario tiene q ingresar un numero SIEMPRE usar parseint
	//ya que sino no van a funcionar las operaciones que hagas.
	//Sirve para convertir de texto a numero
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;
	alert("La suma es: " + resultado);*/
}

//txtIdNumeroUno
//txtIdNumeroDos