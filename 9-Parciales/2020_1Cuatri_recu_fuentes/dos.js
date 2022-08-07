/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
    let respuesta;
    let tipoProducto;
    let precio;
    let cantidadBolsas;
    let descuento;
    let operacionDescuento;
    let precioFinal;
    let precioXBolsa;
    let banderaDelPrimero;
    let productoCantidadBolsasMax;
    let cantidadBolsasMax;
    let banderaDelSegundo;
    let tipoPrecioMax;
    let precioMax;

    banderaDelSegundo = 0;

    banderaDelPrimero = 0;

    respuesta = "si";

    while(respuesta == "si"){
        tipoProducto = prompt("Ingrese el tipo de producto. arena, cal o cemento");
        tipoProducto = tipoProducto.toLowerCase();

        while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento"){
            tipoProducto = prompt("Error ingrese el tipo de producto arena, cal o cemento");
            tipoProducto = tipoProducto.toLowerCase();
        }

        cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
        cantidadBolsas = parseInt(cantidadBolsas);

        while(cantidadBolsas < 1){
            cantidadBolsas = prompt("Ingrese la cantidad de bolsas mayor a 0");
            cantidadBolsas = parseInt(cantidadBolsas);
        }

        precio = prompt("Ingrese el precio de producto. mayor a 0 ");
        precio = parseFloat(precio);

        while(precio < 1){
            precio = prompt("Ingrese el precio de producto. mayor a 0 ");
            precio = parseFloat(precio);
        }

        if(cantidadBolsas > 10 && cantidadBolsas < 30){
            descuento = 10;
        }
        else{
            if(cantidadBolsas > 30){
                descuento = 25;
            }
            else{
                descuento = 0;
            }
        }
        
        // Fin validaciones;

        // C.
        if(banderaDelPrimero == 0){
            productoCantidadBolsasMax = tipoProducto;
            cantidadBolsasMax = cantidadBolsas;

            banderaDelPrimero = 1;
        }
        else{
            if(cantidadBolsas > cantidadBolsasMax){
                productoCantidadBolsasMax = tipoProducto;
                cantidadBolsasMax = cantidadBolsas;
            }
        }

        // D.

        if(banderaDelSegundo == 0){
            tipoPrecioMax = tipoProducto;
            precioMax = precio;
            banderaDelSegundo = 1;
        }
        else{
            if(precio > precioMax){
                tipoPrecioMax = tipoProducto;
                precioMax = precio;
            }
        }

        respuesta = prompt("Desea continuar?");
    }
    precioXBolsa = cantidadBolsas * precio;

    operacionDescuento = precioXBolsa * descuento / 100;
    precioFinal = precioXBolsa - operacionDescuento;

    console.log("El importe total a pagar burto sin descuento es de: " + precioXBolsa);
    console.log("El importe total a pagar con descuento(solo si corresponde): " + precioFinal);
    console.log("El tipo con mas cantidad de bolsas es: " + productoCantidadBolsasMax); 
    console.log("El tipo de producto mas caro es: " + tipoPrecioMax + " con un precio de: " + precioMax);
}
