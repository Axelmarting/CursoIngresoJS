/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividiendo;
	let divisor;
	let resultado;

	dividiendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	//El % sirve para sacar el resto de una division
	resultado= dividiendo % divisor;

	alert("El resto es: " + resultado);
}

//txtIdNumeroDividendo
//txtIdNumeroDivisor