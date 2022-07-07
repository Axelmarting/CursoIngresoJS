/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//Para sacar el porcentaje mas facil se saca multiplicando
	//Si queres incluirlo al sueldo es con el 1 x delante
	//Si queres sacar solo el porcentaje es con un 0 delante
	resultado = sueldo * 1.10;

	document.getElementById("txtIdResultado").value = resultado;

}

//txtIdSueldo
//txtIdResultado