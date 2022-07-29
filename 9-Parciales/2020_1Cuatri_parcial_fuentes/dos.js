/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  let respuesta;
  let tipoProducto;
  let cantidadBolsas;
  let precioDeCadaBolsa;
  let descuento;
  let operacionDescuentoBolsas;
  let descuentoTotal;
  let bolsasXPrecio;
  let banderaDelPrimero;
  let tipoProductoCantidadBolsasMax;
  let cantidadBolsasMax;
  let banderaDelSegundo;
  let tipoProductoPrecioMax;
  let precioMax;
  let acumuladorBolsasXPrecio=0;

  banderaDelPrimero = 0;

  banderaDelSegundo = 0;
  
  respuesta = "si";
  respuesta = respuesta.toLowerCase();

  while(respuesta == "si"){
    tipoProducto = prompt("Ingrese el tipo del producto, arena, cal o cemento");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento"){
			tipoProducto = prompt("Error, ingrese el tipo del producto, arena, cal o cemento");
			tipoProducto = tipoProducto.toLowerCase();
		}

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas.");
    cantidadBolsas = parseInt(cantidadBolsas);

    while(cantidadBolsas < 0){
      cantidadBolsas = prompt("Error, ingrese cantidad de bolsas mayor a 0.")
      cantidadBolsas = parseFloat(cantidadBolsas);
    }

    precioDeCadaBolsa = prompt("Ingrese el precio por bolsa mayor a 0.")
    precioDeCadaBolsa = parseFloat(precioDeCadaBolsa);

    while(precioDeCadaBolsa < 0){
      precioDeCadaBolsa = prompt("Error, ingrese el precio por bolsa mayor a 0.")
      precioDeCadaBolsa = parseFloat(precioDeCadaBolsa);
    }


    if(cantidadBolsas > 10 && cantidadBolsas < 31){
      descuento = 15;
    }
    else{
      if(cantidadBolsas > 30){
        descuento = 25;
      }
      else{
        descuento = 0;
      }
    }

    //terminan validaciones

    // A

    bolsasXPrecio = cantidadBolsas * precioDeCadaBolsa;
    acumuladorBolsasXPrecio += bolsasXPrecio;

    // C

    if(banderaDelPrimero == 0){
      cantidadBolsasMax = cantidadBolsas;
      tipoProductoCantidadBolsasMax = tipoProducto;
      banderaDelPrimero = 1;
    }
    else{
      if(cantidadBolsas > cantidadBolsasMax){
        cantidadBolsasMax = cantidadBolsas;
        tipoProductoCantidadBolsasMax = tipoProducto;
      }
    }

    // D

    if(banderaDelSegundo == 0){
      tipoProductoPrecioMax = tipoProducto;
      precioMax = precioDeCadaBolsa;
      banderaDelSegundo = 1;
    }
    else{
      if(precioDeCadaBolsa > precioMax){
        tipoProductoPrecioMax = tipoProducto;
        precioMax = precioDeCadaBolsa;
      }
    }

    respuesta = prompt("Desea continuar?");
  } 
  // B

  operacionDescuentoBolsas = acumuladorBolsasXPrecio * descuento / 100;
  descuentoTotal = acumuladorBolsasXPrecio - operacionDescuentoBolsas;

  console.log("El importe total a pagar, bruto sin descuento es de: " + acumuladorBolsasXPrecio);
  console.log("El importe total a pagar con descuento (si corresponde) es de: " + descuentoTotal );
  console.log("El tipo de producto con mas cantidad de bolsas es de: " + tipoProductoCantidadBolsasMax);
  console.log("El tipo mas caro es " + tipoProductoPrecioMax + " con un precio por bolsa de " + precioMax);

}
