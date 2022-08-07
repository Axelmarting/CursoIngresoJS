/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let contador5Productos=0;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let banderaDelPrimero;
	let precioJabonesMax;
	let cantidadUnidadesJabonMax;
	let fabricanteJabonMax;
	let acumuladorUnidadesMaxJabon=0;
	let acumuladorUnidadesMaxAlcohol=0;
	let acumuladorUnidadesMaxBarbijo=0;
	let banderaDelSegundo;
	let unidadesMax;
	let tipoUnidadesMax;
	let contadorProductoMax=0;
	let acumuladorProductoMax=0;
	let promedio;
	let acumuladorBarbijo=0;

	banderaDelPrimero = 0;

	banderaDelSegundo = 0;

	while(contador5Productos < 4){
		tipoProducto = prompt("Ingrese el tipo de producto. barbijo, jabon o alcohol");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol"){
			tipoProducto = prompt("Error ingrese el tipo de producto. barbijo, jabon o alcohol");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precio = prompt("Ingrese el precio del producto. entre 100 y 300");
		precio = parseFloat(precio);

		while(precio < 100 || precio > 300){
			precio = prompt("Error ingrese el precio del producto. entre 100 y 300");
			precio = parseFloat(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantiadad de unidades. no puede ser 0 o negativo y no debe superar las 1000 unidades ");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000){
			cantidadUnidades = prompt("Error ingrese la cantiadad de unidades. no puede ser 0 o negativo y no debe superar las 1000 unidades ");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		// marca = prompt("Ingrese la marca.");

		// fabricante = prompt("Ingrese el fabricante");

		// Fin validaciones.

		// A.
		if(tipoProducto == "jabon"){
			if(banderaDelPrimero == 0){
				precioJabonesMax = precio;
				fabricanteJabonMax = fabricante;
				cantidadUnidadesJabonMax = cantidadUnidades;

				banderaDelPrimero = 1;
			}
			else{
				if(precio > precioJabonesMax){
					precioJabonesMax = precio;
					fabricanteJabonMax = fabricante;
					cantidadUnidadesJabonMax = cantidadUnidades;
				}
			}
		}


		// B.
		/*
		switch(tipoProducto){
			case "alcohol":
				acumuladorUnidadesMaxAlcohol += cantidadUnidades;
				break;
			case "barbijo":
				acumuladorUnidadesMaxBarbijo += cantidadUnidades;
				break;
			default:
				acumuladorUnidadesMaxJabon += cantidadUnidades;
		}
*/
		if(banderaDelSegundo == 0 ){
			unidadesMax = cantidadUnidades;
			tipoUnidadesMax = tipoProducto;
			banderaDelSegundo = 1;
		}
		else{
			if(cantidadUnidades > unidadesMax){
				unidadesMax = cantidadUnidades;
				tipoUnidadesMax = tipoProducto;
			}
		}

		if(tipoProducto == tipoUnidadesMax){
			acumuladorProductoMax += cantidadUnidades;
			contadorProductoMax ++;
		}

		// C.
		if(tipoProducto == "barbijo"){
			acumuladorBarbijo += cantidadUnidades;
		}

		



		contador5Productos++;
	} 
	// Continuacion B.
	/*
	if(acumuladorUnidadesMaxAlcohol > acumuladorUnidadesMaxBarbijo && acumuladorUnidadesMaxAlcohol > acumuladorUnidadesMaxJabon){
		productoUnidadesMax = "alcohol";
		contadorProductoMax ++;
		acumuladorProductoMax += cantidadUnidades;
	}
	else{
		if(acumuladorUnidadesMaxBarbijo > acumuladorUnidadesMaxJabon){
			productoUnidadesMax = "barbijo";
			contadorProductoMax ++;
			acumuladorProductoMax += cantidadUnidades;
		}
		else{
			productoUnidadesMax = "jabon";
			contadorProductoMax ++;
			acumuladorProductoMax += cantidadUnidades;
		}
	}
*/
	

	promedio = acumuladorProductoMax / contadorProductoMax;

	console.log("Del más caro de los jabones, que su precio es: " +  precioJabonesMax + ", la cantidad de unidades es de " + cantidadUnidadesJabonMax  + " y el fabricante es: " + fabricanteJabonMax);
	console.log("El producto con mas unidades en total compradas es: " + tipoUnidadesMax + " y el promedio de compra es: " + promedio);
	console.log("La cantidad de unidades de barbijo compradas en total es de: " + acumuladorBarbijo);
}
