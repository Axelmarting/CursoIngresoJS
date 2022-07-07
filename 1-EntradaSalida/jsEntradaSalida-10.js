/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	//se usa con 0 delante ya que quiero consevar el importe
	//al que le quiero restar un 25%, si no lo quisiese consevar y 
	//solo necesitara el 25% seria 0.25.
	resultado = importe * 0.75;

	document.getElementById("txtIdResultado").value = resultado;
}

//txtIdImporte
//txtIdResultado
