/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
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
	alert("La suma es: " + resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos