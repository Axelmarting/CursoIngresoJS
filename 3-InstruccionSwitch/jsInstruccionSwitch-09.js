/*una agencia de viajes debe sacar las tarifas de los viajes
, se cobra $15.000 por cada estadia como base, se pide el 
ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final 

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/

function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let cuentaPorcentaje;
	let precioFinal;
	let porcentaje;
	

	estacion = document.getElementById("txtIdEstacion").value;

	destino =  document.getElementById("txtIdDestino").value;

	estadia = parseInt(estadia);
	estadia = 15000;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					porcentaje = 20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;

				default:
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					porcentaje = -20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;

				default:
					porcentaje = 20;
					break;
			}
			break;
		default:
			switch(destino){
				case "Bariloche":
					porcentaje = 10;
					break;

				case "Cataratas":
					porcentaje = 10;
					break;

				case "Mar del plata":
					porcentajeA = 10;
					break;

				case "Cordoba":
					porcentaje = 0;
					break;

			}
	}
	cuentaPorcentaje = estadia * porcentaje/ 100;
	precioFinal = estadia + cuentaPorcentaje;
	

	alert("El precio final es de: " + precioFinal);
	

}//FIN DE LA FUNCIÓN
//txtIdEstacion
//txtIdDestino